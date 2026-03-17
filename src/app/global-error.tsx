"use client";

export default function GlobalError({ error, reset }: { error: Error; reset: () => void }) {
  return (
    <html>
      <body>
        <main className="mx-auto max-w-3xl px-5 py-10">
          <h1 className="text-2xl font-semibold">Something went wrong</h1>
          <p className="mt-2 text-sm text-[var(--muted)]">{error.message}</p>
          <button className="gold-btn mt-4" onClick={() => reset()}>Try again</button>
        </main>
      </body>
    </html>
  );
}
