# Sync Portal

Production-baseline sync catalog app (DISCO-style workflow), built for Blakmarigold.

## What is now production-ready

- Next.js 16 App Router app with hardened headers
- API routes for:
  - `GET/POST /api/tracks`
  - `GET/POST /api/playlists`
  - `POST /api/playlists/:id/link` (real private link generation)
  - `GET /api/health`
  - `POST /api/uploads/presign` (storage adapter surface)
- Admin metadata form wired to real API validation
- Library + Playlists pages wired to live API data
- Tokenized share pages: `/share/:token`
- Dockerized runtime (`Dockerfile`, `docker-compose.yml`)
- CI pipeline (lint + build + Playwright smoke tests)
- Playwright smoke tests for core routes + health endpoint

## Storage architecture

- **Primary target:** AWS S3 (+ CloudFront)
- **Current mode:** `STORAGE_PROVIDER=local` (so you can run immediately)
- Vector DB is optional and **not** required for core storage/workflows.

## Local run

```bash
npm install
npm run dev
```

Open `http://localhost:3000`

## Quality checks

```bash
npm run lint
npm run build
npm run test:e2e
```

## Docker run

```bash
cp .env.example .env
docker compose up --build
```

App: `http://localhost:3000`
Health: `http://localhost:3000/api/health`

## Environment

Use `.env` (or `.env.local`) based on `.env.example`.

Key values:
- `BASE_URL`
- `SIGNING_SECRET`
- `LINK_TTL_HOURS`
- `STORAGE_PROVIDER=local|s3`
- `AWS_*` vars for S3 (when enabled)

## Next step when you’re ready for S3

1. Create private bucket + IAM upload policy
2. Set AWS env vars
3. Switch `STORAGE_PROVIDER=s3`
4. Wire real S3 presign implementation in `src/lib/storage/index.ts`
