export default function AdminPage() {
  return (
    <main className="mx-auto max-w-6xl px-5 py-10">
      <h1 className="text-3xl font-semibold">Admin Upload Console</h1>
      <p className="mt-2 text-sm text-[var(--muted)]">Night build v1: structure for track ingest, metadata entry, and stems package management.</p>

      <section className="lux-border mt-6 rounded-2xl p-6">
        <h2 className="text-xl font-semibold">Upload Workflow (wired for next step)</h2>
        <ol className="mt-4 list-decimal space-y-2 pl-5 text-sm text-[var(--muted)]">
          <li>Upload MP3 preview + WAV master + optional stems zip.</li>
          <li>Enter sync metadata: bpm, key, moods, genre, lyrics theme, clearance contacts.</li>
          <li>Assign rights status: one-stop or split ownership.</li>
          <li>Add track to one or more pitch playlists.</li>
          <li>Create private supervisor link with expiration/password.</li>
        </ol>
      </section>

      <section className="mt-6 grid gap-4 md:grid-cols-2">
        <div className="lux-border rounded-2xl p-5">
          <h3 className="font-semibold">Schema planned tonight</h3>
          <p className="mt-2 text-sm text-[var(--muted)]">tracks, assets, playlists, playlist_tracks, contacts, pitches, and listen_events.</p>
        </div>
        <div className="lux-border rounded-2xl p-5">
          <h3 className="font-semibold">Deployment target</h3>
          <p className="mt-2 text-sm text-[var(--muted)]">Custom domain + secure auth + media storage + analytics before final handoff.</p>
        </div>
      </section>
    </main>
  );
}
