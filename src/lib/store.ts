import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import crypto from "node:crypto";
import { tracks as seedTracks, playlists as seedPlaylists } from "@/lib/catalog";
import type { DataStore, Playlist, ShareLink, Track } from "@/lib/types";

const dataDir = path.join(process.cwd(), "data");
const storePath = path.join(dataDir, "store.json");

const now = () => new Date().toISOString();

function fromSeed(): DataStore {
  const timestamp = now();
  return {
    tracks: seedTracks.map((t) => ({ ...t, createdAt: timestamp, updatedAt: timestamp })),
    playlists: seedPlaylists.map((p) => ({
      id: p.id,
      name: p.name,
      tags: p.tags,
      trackIds: [],
      createdAt: timestamp,
      updatedAt: timestamp,
    })),
    shareLinks: [],
  };
}

async function ensureStore() {
  await mkdir(dataDir, { recursive: true });
  try {
    await readFile(storePath, "utf8");
  } catch {
    await writeFile(storePath, JSON.stringify(fromSeed(), null, 2), "utf8");
  }
}

export async function readStore(): Promise<DataStore> {
  await ensureStore();
  const raw = await readFile(storePath, "utf8");
  return JSON.parse(raw) as DataStore;
}

export async function writeStore(next: DataStore): Promise<void> {
  await ensureStore();
  await writeFile(storePath, JSON.stringify(next, null, 2), "utf8");
}

export async function listTracks() {
  const db = await readStore();
  return db.tracks;
}

export async function createTrack(input: Omit<Track, "id" | "createdAt" | "updatedAt">) {
  const db = await readStore();
  const track: Track = {
    ...input,
    id: `TRK-${crypto.randomUUID().slice(0, 8).toUpperCase()}`,
    createdAt: now(),
    updatedAt: now(),
  };
  db.tracks.unshift(track);
  await writeStore(db);
  return track;
}

export async function listPlaylists() {
  const db = await readStore();
  return db.playlists;
}

export async function createPlaylist(input: Omit<Playlist, "id" | "createdAt" | "updatedAt">) {
  const db = await readStore();
  const playlist: Playlist = {
    ...input,
    id: `PL-${crypto.randomUUID().slice(0, 8).toUpperCase()}`,
    createdAt: now(),
    updatedAt: now(),
  };
  db.playlists.unshift(playlist);
  await writeStore(db);
  return playlist;
}

export async function createShareLink(input: Omit<ShareLink, "token" | "createdAt">) {
  const db = await readStore();
  const link: ShareLink = {
    ...input,
    token: crypto.randomBytes(18).toString("base64url"),
    createdAt: now(),
  };
  db.shareLinks.unshift(link);
  await writeStore(db);
  return link;
}

export async function getShareLink(token: string) {
  const db = await readStore();
  return db.shareLinks.find((l) => l.token === token) ?? null;
}

export async function getPlaylistById(id: string) {
  const db = await readStore();
  return db.playlists.find((p) => p.id === id) ?? null;
}
