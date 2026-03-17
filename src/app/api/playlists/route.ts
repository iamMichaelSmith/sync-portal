import { NextResponse } from "next/server";
import { createPlaylist, listPlaylists } from "@/lib/store";
import { playlistInputSchema } from "@/lib/validators";

export async function GET() {
  const playlists = await listPlaylists();
  return NextResponse.json({ data: playlists });
}

export async function POST(req: Request) {
  try {
    const json = await req.json();
    const parsed = playlistInputSchema.parse(json);
    const created = await createPlaylist(parsed);
    return NextResponse.json({ data: created }, { status: 201 });
  } catch {
    return NextResponse.json({ error: "Invalid playlist payload" }, { status: 400 });
  }
}
