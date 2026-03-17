import Link from "next/link";

export default function Home() {
  return (
    <main className="mx-auto max-w-6xl px-5 py-10">
      <section className="lux-border rounded-3xl p-8 md:p-12">
        <p className="mb-4 text-xs tracking-[0.2em] text-[var(--muted)]">PRIVATE SYNC CATALOG</p>
        <h1 className="max-w-3xl text-4xl font-semibold leading-tight md:text-6xl">
          Blakmarigold Music Library for Supervisors, Brands, and Sync Teams.
        </h1>
        <p className="mt-5 max-w-2xl text-[var(--muted)]">
          Upload and organize masters, WAVs, MP3s, and stems. Build curated playlists, share private links,
          and pitch faster with one-stop metadata and clearance-ready details.
        </p>
        <div className="mt-7 flex flex-wrap gap-3">
          <Link className="gold-btn" href="/library">Open Library</Link>
          <Link className="rounded-full border border-[var(--line)] px-4 py-2" href="/playlists">View Playlists</Link>
          <Link className="rounded-full border border-[var(--line)] px-4 py-2" href="/admin">Admin Console</Link>
        </div>
      </section>

      <section className="mt-8 grid gap-4 md:grid-cols-4">
        <div className="lux-border rounded-2xl p-5"><p className="text-3xl font-bold">API</p><p className="text-sm text-[var(--muted)]">Track + Playlist CRUD</p></div>
        <div className="lux-border rounded-2xl p-5"><p className="text-3xl font-bold">S3</p><p className="text-sm text-[var(--muted)]">Storage target architecture</p></div>
        <div className="lux-border rounded-2xl p-5"><p className="text-3xl font-bold">Docker</p><p className="text-sm text-[var(--muted)]">Container-ready runtime</p></div>
        <div className="lux-border rounded-2xl p-5"><p className="text-3xl font-bold">CI</p><p className="text-sm text-[var(--muted)]">Lint, build, smoke tests</p></div>
      </section>
    </main>
  );
}
