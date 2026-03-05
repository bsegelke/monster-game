# AGENTS.md

## Cursor Cloud specific instructions

This is a simple two-service JavaScript web app ("monster-game"): a **React frontend** (`my-app/`) and an **Express.js backend** (`server/`). No database or Docker is required.

### Project structure

- `my-app/` — React 19 + Vite 7 frontend (port 5173)
- `server/` — Express 5 + nodemon backend API (port 3000)
- Root `package.json` has no meaningful dependencies; each sub-project manages its own.

### Running services

- **Backend:** `cd server && npm run dev` (starts nodemon on port 3000)
- **Frontend:** `cd my-app && npm run dev` (starts Vite dev server on port 5173)
- The frontend calls `http://localhost:3000/api/auth/signup` — the backend must be running first.

### Lint / Build / Test

- **Lint:** `cd my-app && npm run lint` (ESLint; server has no lint configured)
- **Build:** `cd my-app && npm run build`
- **Tests:** No automated test suite exists yet (`server/package.json` test script is a placeholder).

### Gotchas

- The `setup` branch (now merged into the working branch) committed `server/node_modules` and a root `node_modules` to git. If you see stale modules, delete and reinstall: `cd server && rm -rf node_modules && npm install`.
- The frontend API URL (`http://localhost:3000`) is hardcoded in `my-app/src/assets/api/frontend.js`.
