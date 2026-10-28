# Agent Guidelines & Repository Rules

## 🔒 Strict Rule: Always Docker and Render Ready
1. **Docker**:
   - The project must build and run cleanly via `docker-compose up --build`.
   - Root and sub-project Dockerfiles (`Dockerfile`, `backend/Dockerfile`, `frontend/Dockerfile`) and `docker-compose.yml` must always be maintained, validated, and kept in sync with code changes.
2. **Hosting (Render backend, Vercel frontend, Supabase PostgreSQL)**:
   - `render.yaml` blueprint must always be updated and verified whenever backend services, environment variables, ports, or build steps change.
   - `frontend/vercel.json` must match the frontend build output.
   - The backend must provide active health check endpoints (`/api/public/health`).
3. **Git Synchronization**:
   - Every completed task and update must be committed and pushed to `origin main` (`https://github.com/bhartijha279-hash/pharmahealth.git`).
