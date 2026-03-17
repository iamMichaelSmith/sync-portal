import { playlists } from "@/lib/catalog";

export default function PlaylistsPage() {
  return (
    <main className="mx-auto max-w-6xl px-5 py-10">
      <h1 className="text-3xl font-semibold">Pitch Playlists</h1>
      <p className="mt-2 text-sm text-[var(--muted)]">Curated packs for sync briefs, supervisors, and brand campaigns.</p>

      <div className="mt-6 grid gap-4 md:grid-cols-3">
        {playlists.map((p) => (
          <article key={p.id} className="lux-border rounded-2xl p-5">
            <p className="text-xs text-[var(--muted)]">{p.id}</p>
            <h2 className="mt-1 text-xl font-semibold">{p.name}</h2>
            <p className="mt-1 text-sm text-[var(--muted)]">{p.count} tracks</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {p.tags.map((tag) => (
                <span key={tag} className="badge">{tag}</span>
              ))}
            </div>
            <button className="gold-btn mt-5">Generate Private Link</button>
          </article>
        ))}
      </div>
    </main>
  );
}
