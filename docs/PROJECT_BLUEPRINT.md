# Blakmarigold Sync Portal - Project Blueprint

## Purpose
Build a private, studio-owned sync catalog platform inspired by DISCO-style workflows for:
- Internal portfolio management
- Fast sync pitching to supervisors/brands
- Controlled sharing of MP3/WAV/stems
- Rights and clearance-ready metadata

This system gives Blakmarigold long-term control over data, branding, and workflow velocity.

---

## Why build this (business reasons)
1. **Ownership**: all tracks, contacts, and pitch history stay in your stack.
2. **Speed**: one place to upload, tag, build playlists, and share.
3. **Brand authority**: premium branded portal vs generic links.
4. **Sync readiness**: one-stop metadata + clearance notes reduce friction.
5. **Scalability**: can evolve into internal SaaS for team workflows.

---

## End State (MVP+)
- Upload track assets (MP3 preview, WAV master, stems zip)
- Track metadata and rights records
- Playlist builder for sync briefs
- Private password/token links for supervisors
- Analytics: plays/downloads/link opens
- Admin panel for curation and contact pipeline

---

## Architecture (AWS-first)

### Frontend
- Next.js 16 (App Router), TypeScript, Tailwind
- Hosted on Vercel OR AWS Amplify

### Backend/API
- Next.js Route Handlers for secure API endpoints
- Optional Lambda for heavy transcoding queue jobs

### Data
- Postgres (Supabase now, can migrate to AWS RDS later)
- Core tables: tracks, assets, metadata, playlists, playlist_tracks, contacts, pitches, activity_events
- Vector database is not required for core product functionality

### Media Storage
- AWS S3 private buckets (primary storage for all media assets)
- Signed URLs for secure stream/download
- CloudFront in front of S3 for performance

### Auth & Security
- Admin auth (email/password or magic links)
- Role-based access for studio users
- Tokenized external links for supervisors

### Processing
- FFmpeg metadata extraction + waveform generation
- Background jobs for thumbnail/waveform/stem packaging

### Observability
- Basic event logging in Postgres
- Later: CloudWatch + Sentry + product analytics

---

## Step-by-step Build Plan

## Phase 1 - Foundation (Done/In Progress)
1. Create Next.js project and navigation structure
2. Build branded shell (home, library, playlists, admin)
3. Add catalog model and placeholder data
4. Define visual system (dark luxury + gold accent)

## Phase 2 - Core Product Data
1. Add env config for Supabase + AWS
2. Create SQL schema and migration scripts
3. Build track CRUD API endpoints
4. Build upload endpoint with presigned S3 URLs

## Phase 3 - Library + Playlist Engine
1. Real library table with advanced filters
2. Playlist create/edit/reorder UI
3. Link generator per playlist (private/public)
4. Track-level rights badges and readiness flags

## Phase 4 - Sync Workflow
1. Contact manager (supervisors, brands, sync houses)
2. Pitch tracking (sent/opened/downloaded/responded)
3. Follow-up reminder system
4. Brief matching tags (mood, energy, genre, scene type)

## Phase 5 - Production Readiness
1. CloudFront + S3 policies and signed URL hardening
2. Auth hardening and audit logs
3. Performance pass, accessibility pass, mobile QA
4. Domain connect + SSL + launch checklist

---

## Deployment Checklist
- [ ] Domain DNS records configured
- [ ] SSL cert active
- [ ] S3 bucket private policies set
- [ ] CloudFront distribution active
- [ ] Environment variables set for production
- [ ] Database backup enabled
- [ ] Error tracking enabled
- [ ] Admin users created

---

## Employment-ready Deliverables
1. Product screenshots (home, library, playlists, admin)
2. Architecture diagram
3. Feature matrix + roadmap
4. Case study writeup:
   - problem
   - approach
   - technical stack
   - design rationale
   - outcomes / next milestones

---

## Immediate Next Morning Revision Topics
1. Final brand colors + typography lock
2. Exact metadata fields required for your sync process
3. Supervisor pitch workflow preferences
4. Domain + deployment target (Amplify vs Vercel + AWS assets)
5. Asset upload rules (file size, naming convention, stems package format)
