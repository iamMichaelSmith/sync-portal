"use client";

import { useMemo, useState } from "react";
import { tracks } from "@/lib/catalog";

export default function LibraryPage() {
  const [query, setQuery] = useState("");
  const [genre, setGenre] = useState("All");

  const genres = ["All", ...new Set(tracks.map((t) => t.genre))];

  const filtered = useMemo(() => {
    return tracks.filter((t) => {
      const hit = `${t.title} ${t.artist} ${t.mood.join(" ")}`.toLowerCase().includes(query.toLowerCase());
      const genreHit = genre === "All" || t.genre === genre;
      return hit && genreHit;
    });
  }, [query, genre]);

  return (
    <main className="mx-auto max-w-6xl px-5 py-10">
      <h1 className="text-3xl font-semibold">Library</h1>
      <p className="mt-2 text-sm text-[var(--muted)]">Filter by genre, moods, and metadata like a sync-ready catalog.</p>

      <div className="mt-6 grid gap-3 md:grid-cols-3">
        <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search tracks, moods, artist..." className="lux-border rounded-xl px-4 py-3 outline-none" />
        <select value={genre} onChange={(e) => setGenre(e.target.value)} className="lux-border rounded-xl px-4 py-3 outline-none">
          {genres.map((g) => <option key={g}>{g}</option>)}
        </select>
      </div>

      <div className="mt-6 grid gap-4">
        {filtered.map((t) => (
          <article key={t.id} className="lux-border rounded-2xl p-5">
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <h2 className="text-xl font-semibold">{t.title}</h2>
                <p className="text-sm text-[var(--muted)]">{t.artist} · {t.genre} · {t.bpm} BPM · {t.key}</p>
              </div>
              <span className="badge">{t.clearance}</span>
            </div>
            <div className="mt-3 flex flex-wrap gap-2 text-xs">
              {t.mood.map((m) => <span key={m} className="rounded-full border border-[var(--line)] px-3 py-1">{m}</span>)}
              <span className="rounded-full border border-[var(--line)] px-3 py-1">{t.vocals}</span>
              <span className="rounded-full border border-[var(--line)] px-3 py-1">{t.stems ? "Stems" : "No Stems"}</span>
              <span className="rounded-full border border-[var(--line)] px-3 py-1">{t.wav ? "WAV" : "-"}</span>
              <span className="rounded-full border border-[var(--line)] px-3 py-1">{t.mp3 ? "MP3" : "-"}</span>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}
