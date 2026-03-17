export type Track = {
  id: string;
  title: string;
  artist: string;
  bpm: number;
  key: string;
  mood: string[];
  genre: string;
  vocals: "Instrumental" | "Vocal" | "Alt Versions";
  clearance: "One-stop" | "Split";
  stems: boolean;
  wav: boolean;
  mp3: boolean;
  previewUrl?: string;
};

export const tracks: Track[] = [
  {
    id: "BM-001",
    title: "Midnight Engine",
    artist: "Blakmarigold",
    bpm: 142,
    key: "F# Min",
    mood: ["Dark", "Confident", "Cinematic"],
    genre: "Trap",
    vocals: "Instrumental",
    clearance: "One-stop",
    stems: true,
    wav: true,
    mp3: true,
  },
  {
    id: "BM-014",
    title: "City Lights Slow Burn",
    artist: "Blakmarigold",
    bpm: 96,
    key: "A Min",
    mood: ["Emotional", "Late Night", "Melodic"],
    genre: "R&B",
    vocals: "Alt Versions",
    clearance: "One-stop",
    stems: true,
    wav: true,
    mp3: true,
  },
  {
    id: "BM-031",
    title: "Run It Back",
    artist: "Blakmarigold",
    bpm: 128,
    key: "C Min",
    mood: ["Energetic", "Sport", "Hype"],
    genre: "Hip-Hop",
    vocals: "Vocal",
    clearance: "Split",
    stems: true,
    wav: true,
    mp3: true,
  },
  {
    id: "BM-047",
    title: "Gold Hour Frames",
    artist: "Blakmarigold",
    bpm: 110,
    key: "E Min",
    mood: ["Dreamy", "Warm", "Story"],
    genre: "Alt Pop",
    vocals: "Instrumental",
    clearance: "One-stop",
    stems: false,
    wav: true,
    mp3: true,
  },
];

export const playlists = [
  { id: "PL-SYNC-01", name: "Trailer Energy", count: 18, tags: ["Action", "Sports", "Hype"] },
  { id: "PL-SYNC-02", name: "Late Night Drama", count: 14, tags: ["Emotional", "Dark", "TV"] },
  { id: "PL-SYNC-03", name: "Luxury Brand Cuts", count: 11, tags: ["Modern", "Elegant", "Fashion"] },
];
