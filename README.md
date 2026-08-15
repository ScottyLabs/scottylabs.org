# ScottyLabs.org!

The official landing page for ScottyLabs, as well as the host for Clerk authentication.

This is a lightweight monorepo (haha oxymoron am I right) with a `/apps/backend` and a `/apps/web`. It's set up this way so all frontend api calls can use the contract defined in the backend and be fully typesafe.

If this is your first time setting up the repo, please run `pnpm setup-db` (or `pnpm --filter @apps/backend setup-db`) first to create your local database. (Note that you should have the Docker CLI installed). For frontend .env variables, check the latest Vercel deployment. For backend .env variables, check the latest Railway deployment. If you don't have access to either deployment, ask Eric Xu on Slack.

To run everything: `pnpm -r --parallel run dev`
To run a specific module, `pnpm -F @apps/backend dev`, for example

Frontend: React + Vite + Typescript + Tanstack Query

Backend: Fastify + `ts-rest` + Drizzle + octokit (Slack API) + Node runtime

Note: if you make any db schema changes, please run `pnpm db:generate` before committing to generate migration files
