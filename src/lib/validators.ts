import { z } from "zod";

export const trackInputSchema = z.object({
  title: z.string().min(1),
  artist: z.string().min(1),
  bpm: z.number().int().positive(),
  key: z.string().min(1),
  mood: z.array(z.string().min(1)).min(1),
  genre: z.string().min(1),
  vocals: z.enum(["Instrumental", "Vocal", "Alt Versions"]),
  clearance: z.enum(["One-stop", "Split"]),
  stems: z.boolean(),
  wav: z.boolean(),
  mp3: z.boolean(),
  lyricsTheme: z.string().optional(),
  previewUrl: z.string().url().optional(),
});

export const playlistInputSchema = z.object({
  name: z.string().min(1),
  tags: z.array(z.string()).default([]),
  trackIds: z.array(z.string()).default([]),
});
