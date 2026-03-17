import { notFound } from "next/navigation";
import { getPlaylistById, getShareLink, listTracks } from "@/lib/store";

export default async function SharedPlaylistPage({ params }: { params: Promise<{ token: string }> }) {
  const { token } = await params;
  const link = await getShareLink(token);
  if (!link) notFound();

  // eslint-disable-next-line react-hooks/purity
  if (new Date(link.expiresAt).getTime() < Date.now()) {
    return <main className="mx-auto max-w-3xl px-5 py-10"><h1 className="text-2xl font-semibold">Link expired</h1></main>;
  }

  const playlist = await getPlaylistById(link.playlistId);
  if (!playlist) notFound();

  const tracks = await listTracks();
  const included = tracks.filter((t) => playlist.trackIds.includes(t.id));

  return (
    <main className="mx-auto max-w-4xl px-5 py-10">
      <h1 className="text-3xl font-semibold">{playlist.name}</h1>
      <p className="mt-2 text-sm text-[var(--muted)]">Private sync share link · expires {new Date(link.expiresAt).toLocaleString()}</p>
      <div className="mt-6 grid gap-3">
        {included.length === 0 ? <p className="text-sm text-[var(--muted)]">No tracks assigned yet.</p> : null}
        {included.map((t) => (
          <article key={t.id} className="lux-border rounded-xl p-4">
            <p className="font-semibold">{t.title}</p>
            <p className="text-sm text-[var(--muted)]">{t.artist} · {t.genre} · {t.bpm} BPM · {t.key}</p>
          </article>
        ))}
      </div>
    </main>
  );
}
