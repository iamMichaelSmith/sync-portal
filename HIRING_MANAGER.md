# Hiring Manager Notes (sync-portal)

## Role Alignment
Useful portfolio piece for frontend/full-stack product roles, internal tools work, and junior platform teams that value product-minded implementation.

## What This Project Shows
- Product framing around private sync catalog operations, not generic CRUD
- Next.js App Router implementation with API routes and share-link flows
- Deployment-minded setup with Docker, env templating, and browser smoke coverage
- Evidence of debugging discipline through stabilized Playwright startup configuration

## Verification Snapshot
- Last verified local pass: 2026-03-18
- Verified on machine: Windows (PowerShell)
- `npm run lint` ✅
- `npm run build` ✅
- `npm run test:e2e` ✅
- Playwright uses a dedicated local port (`3100` by default) to avoid flaky startup collisions on shared dev machines

## Suggested Interview Talking Points
1. Why internal tooling and share-link flows matter for music/sync workflows
2. How you hardened local verification by removing port-collision flakiness
3. What you would add next for auth, storage, and deployment observability
