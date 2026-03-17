export type Clearance = "One-stop" | "Split";
export type Vocals = "Instrumental" | "Vocal" | "Alt Versions";

export type Track = {
  id: string;
  title: string;
  artist: string;
  bpm: number;
  key: string;
  mood: string[];
  genre: string;
  vocals: Vocals;
  clearance: Clearance;
  stems: boolean;
  wav: boolean;
  mp3: boolean;
  lyricsTheme?: string;
  previewUrl?: string;
  createdAt: string;
  updatedAt: string;
};

export type Playlist = {
  id: string;
  name: string;
  tags: string[];
  trackIds: string[];
  createdAt: string;
  updatedAt: string;
};

export type ShareLink = {
  token: string;
  playlistId: string;
  expiresAt: string;
  password?: string;
  createdAt: string;
};

export type DataStore = {
  tracks: Track[];
  playlists: Playlist[];
  shareLinks: ShareLink[];
};
