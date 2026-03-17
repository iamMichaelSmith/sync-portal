import { getServerEnv } from "@/lib/env";

export type SignedUpload = { uploadUrl: string; assetUrl: string };

export interface StorageAdapter {
  getSignedUpload(key: string, contentType: string): Promise<SignedUpload>;
}

class LocalStorageAdapter implements StorageAdapter {
  async getSignedUpload(key: string): Promise<SignedUpload> {
    return {
      uploadUrl: `/api/uploads/local?key=${encodeURIComponent(key)}`,
      assetUrl: `/uploads/${key}`,
    };
  }
}

class S3StorageAdapter implements StorageAdapter {
  async getSignedUpload(): Promise<SignedUpload> {
    throw new Error("S3 signing not wired yet. Set STORAGE_PROVIDER=local until AWS setup is complete.");
  }
}

export function getStorageAdapter(): StorageAdapter {
  const env = getServerEnv();
  return env.STORAGE_PROVIDER === "s3" ? new S3StorageAdapter() : new LocalStorageAdapter();
}
