"use client";

import { FormEvent, useState } from "react";

export default function AdminPage() {
  const [status, setStatus] = useState("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const payload = {
      title: String(form.get("title") || ""),
      artist: String(form.get("artist") || ""),
      bpm: Number(form.get("bpm") || 0),
      key: String(form.get("key") || ""),
      mood: String(form.get("mood") || "").split(",").map((x) => x.trim()).filter(Boolean),
      genre: String(form.get("genre") || ""),
      vocals: String(form.get("vocals") || "Instrumental"),
      clearance: String(form.get("clearance") || "One-stop"),
      stems: Boolean(form.get("stems")),
      wav: true,
      mp3: true,
    };

    const res = await fetch("/api/tracks", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (res.ok) {
      setStatus("Track saved.");
      e.currentTarget.reset();
    } else {
      setStatus("Could not save track. Check fields.");
    }
  }

  return (
    <main className="mx-auto max-w-6xl px-5 py-10">
      <h1 className="text-3xl font-semibold">Admin Upload Console</h1>
      <p className="mt-2 text-sm text-[var(--muted)]">Production baseline: metadata ingestion + API validation live.</p>

      <section className="lux-border mt-6 rounded-2xl p-6">
        <h2 className="text-xl font-semibold">Create Track Metadata</h2>
        <form className="mt-4 grid gap-3 md:grid-cols-2" onSubmit={onSubmit}>
          <input required name="title" placeholder="Title" className="lux-border rounded-xl px-4 py-3" />
          <input required name="artist" placeholder="Artist" className="lux-border rounded-xl px-4 py-3" />
          <input required name="bpm" type="number" placeholder="BPM" className="lux-border rounded-xl px-4 py-3" />
          <input required name="key" placeholder="Key (ex: A Min)" className="lux-border rounded-xl px-4 py-3" />
          <input required name="genre" placeholder="Genre" className="lux-border rounded-xl px-4 py-3" />
          <input required name="mood" placeholder="Mood tags (comma-separated)" className="lux-border rounded-xl px-4 py-3" />
          <select name="vocals" className="lux-border rounded-xl px-4 py-3">
            <option>Instrumental</option>
            <option>Vocal</option>
            <option>Alt Versions</option>
          </select>
          <select name="clearance" className="lux-border rounded-xl px-4 py-3">
            <option>One-stop</option>
            <option>Split</option>
          </select>
          <label className="text-sm text-[var(--muted)]"><input type="checkbox" name="stems" className="mr-2" />Stems available</label>
          <button className="gold-btn" type="submit">Save Track</button>
        </form>
        {status ? <p className="mt-3 text-sm text-[var(--muted)]">{status}</p> : null}
      </section>
    </main>
  );
}
