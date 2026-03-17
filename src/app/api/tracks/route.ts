import { NextResponse } from "next/server";
import { createTrack, listTracks } from "@/lib/store";
import { trackInputSchema } from "@/lib/validators";
import { logError, logInfo } from "@/lib/logger";

export async function GET() {
  const tracks = await listTracks();
  return NextResponse.json({ data: tracks });
}

export async function POST(req: Request) {
  try {
    const json = await req.json();
    const parsed = trackInputSchema.parse(json);
    const created = await createTrack(parsed);
    logInfo("track_created", { trackId: created.id });
    return NextResponse.json({ data: created }, { status: 201 });
  } catch (error) {
    logError("track_create_failed", { error: String(error) });
    return NextResponse.json({ error: "Invalid track payload" }, { status: 400 });
  }
}
