import { NextResponse } from "next/server";
import { createShareLink, getPlaylistById } from "@/lib/store";
import { getServerEnv } from "@/lib/env";

export async function POST(_: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const env = getServerEnv();
  const playlist = await getPlaylistById(id);

  if (!playlist) {
    return NextResponse.json({ error: "Playlist not found" }, { status: 404 });
  }

  const expiresAt = new Date(Date.now() + env.LINK_TTL_HOURS * 60 * 60 * 1000).toISOString();
  const link = await createShareLink({ playlistId: id, expiresAt });

  return NextResponse.json({
    data: {
      token: link.token,
      url: `${env.BASE_URL}/share/${link.token}`,
      expiresAt: link.expiresAt,
    },
  });
}
