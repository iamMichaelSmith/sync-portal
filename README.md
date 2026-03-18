# Sync Portal

Production-baseline sync catalog app (DISCO-style workflow), built for Blakmarigold.

## Hiring manager snapshot

This repo presents as a focused product prototype rather than a generic tutorial app:

- Clear business use case: private sync catalog management and playlist sharing
- Practical full-stack scope: Next.js App Router UI, API routes, tokenized share pages, storage adapter surface
- Deployment-minded baseline: Docker support, environment template, hardened headers, CI, and Playwright smoke coverage
- Good signal for employers: shows product thinking, internal tooling experience, and incremental production hardening

## Proof artifacts

- Hiring-manager notes: `HIRING_MANAGER.md`
- Evaluation walkthrough: `docs/EVALUATION_WALKTHROUGH.md`
- Production checklist: `docs/PRODUCTION_CHECKLIST.md`
- Project blueprint: `docs/PROJECT_BLUEPRINT.md`
- Screenshots: `docs/screenshots/`

## Local verification status

Last local pass in this workspace:

- `npm run lint` ✅
- `npm run build` ✅
- `npm run test:e2e` ✅

Playwright now runs against a dedicated local port (`3100` by default) so smoke tests do not get derailed by a busy `3000` on shared dev machines.

That makes this repo interview-ready from both a code review and local verification standpoint.

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
