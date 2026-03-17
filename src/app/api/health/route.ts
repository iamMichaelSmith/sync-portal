import { NextResponse } from "next/server";
import { getServerEnv } from "@/lib/env";

export async function GET() {
  const env = getServerEnv();
  return NextResponse.json({
    ok: true,
    service: "sync-portal",
    storageProvider: env.STORAGE_PROVIDER,
    timestamp: new Date().toISOString(),
  });
}
