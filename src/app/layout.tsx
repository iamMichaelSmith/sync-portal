import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "Blakmarigold Sync Portal",
  description: "Private sync catalog and pitching portal",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <header className="sticky top-0 z-40 border-b border-[var(--line)] bg-black/60 backdrop-blur">
          <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
            <div>
              <p className="text-xs tracking-[0.2em] text-[var(--muted)]">BLAKMARIGOLD</p>
              <p className="text-sm font-semibold tracking-[0.14em]">SYNC PORTAL</p>
            </div>
            <div className="flex gap-5 text-sm text-[var(--muted)]">
              <Link href="/">Home</Link>
              <Link href="/library">Library</Link>
              <Link href="/playlists">Playlists</Link>
              <Link href="/admin">Admin</Link>
            </div>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
