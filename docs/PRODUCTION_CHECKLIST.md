# Production Checklist

## App
- [x] Lint passes
- [x] Build passes
- [x] Smoke tests pass
- [x] Health endpoint exists
- [x] Error boundary exists

## Security
- [x] Security headers in Next config
- [x] Tokenized private links with expiry
- [x] Env validation via zod

## Infrastructure
- [x] Dockerfile (multi-stage)
- [x] docker-compose for local container runs
- [x] Data volume mount configured
- [x] GitHub Actions CI

## S3 later today
- [ ] Create private bucket
- [ ] Add IAM user/role with scoped permissions
- [ ] Set AWS env vars in runtime
- [ ] Switch STORAGE_PROVIDER=s3
- [ ] Replace S3 adapter stub with actual presign implementation
