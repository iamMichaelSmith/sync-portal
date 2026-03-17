"use client";

import { useEffect, useState } from "react";
import type { Playlist } from "@/lib/types";

type LinkMap = Record<string, string>;

export default function PlaylistsPage() {
  const [playlists, setPlaylists] = useState<Playlist[]>([]);
  const [links, setLinks] = useState<LinkMap>({});

  useEffect(() => {
    fetch("/api/playlists").then((r) => r.json()).then((json) => setPlaylists(json.data ?? []));
  }, []);

  async function generateLink(playlistId: string) {
    const res = await fetch(`/api/playlists/${playlistId}/link`, { method: "POST" });
    const json = await res.json();
    if (json?.data?.url) {
      setLinks((prev) => ({ ...prev, [playlistId]: json.data.url }));
    }
  }

  return (
    <main className="mx-auto max-w-6xl px-5 py-10">
      <h1 className="text-3xl font-semibold">Pitch Playlists</h1>
      <p className="mt-2 text-sm text-[var(--muted)]">Curated packs for sync briefs, supervisors, and brand campaigns.</p>

      <div className="mt-6 grid gap-4 md:grid-cols-3">
        {playlists.map((p) => (
          <article key={p.id} className="lux-border rounded-2xl p-5">
            <p className="text-xs text-[var(--muted)]">{p.id}</p>
            <h2 className="mt-1 text-xl font-semibold">{p.name}</h2>
            <p className="mt-1 text-sm text-[var(--muted)]">{p.trackIds.length} tracks</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {p.tags.map((tag) => (
                <span key={tag} className="badge">{tag}</span>
              ))}
            </div>
            <button className="gold-btn mt-5" onClick={() => generateLink(p.id)}>Generate Private Link</button>
            {links[p.id] ? <p className="mt-3 break-all text-xs text-[var(--muted)]">{links[p.id]}</p> : null}
          </article>
        ))}
      </div>
    </main>
  );
}
