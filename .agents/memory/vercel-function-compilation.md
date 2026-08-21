---
name: Vercel function compilation
description: Prevent Vercel serverless function deployment failures caused by frontend TypeScript compiler settings.
---

Use a plain JavaScript `.mjs` Vercel Function when the frontend TypeScript configuration disables emitting JavaScript.

**Why:** Vercel compiles TypeScript function entries with the closest project TypeScript configuration. A frontend config that uses `noEmit` can cause the deployment error `Emit skipped`.

**How to apply:** Keep the frontend build configuration unchanged and use `.mjs` function entry files for serverless API routes unless a separate emitting TypeScript configuration is deliberately maintained.