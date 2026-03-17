import { NextResponse } from "next/server";
import { getStorageAdapter } from "@/lib/storage";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const key = String(body.key || "");
    const contentType = String(body.contentType || "audio/mpeg");
    if (!key) return NextResponse.json({ error: "key required" }, { status: 400 });

    const signed = await getStorageAdapter().getSignedUpload(key, contentType);
    return NextResponse.json({ data: signed });
  } catch (error) {
    return NextResponse.json({ error: String(error) }, { status: 500 });
  }
}
