# WStore IPTV Panel deployment guide for Railway/Render

## Quick deploy on Railway

1. Push this repository to GitHub.
2. Open Railway and create a new project from GitHub.
3. Add a PostgreSQL service.
4. Add a Redis service (or use a managed Redis on Railway).
5. Create a backend service using the `backend` directory.
6. Create a frontend service using the `frontend` directory.
7. Set environment variables:
   - `PORT`=3001
   - `JWT_SECRET`=some_secret
   - `FRONTEND_URL`=https://your-frontend-url
   - `DB_HOST`=your-postgres-host
   - `DB_PORT`=5432
   - `DB_USER`=postgres
   - `DB_PASSWORD`=your-password
   - `DB_NAME`=railway
   - `REDIS_URL`=your-redis-url
8. Deploy.

## Production URL
- Frontend: `https://your-frontend.up.railway.app`
- Backend: `https://your-backend.up.railway.app`

## Notes
- This project is built as an IPTV management dashboard for legal content providers.
- Use only content sources with valid authorization.
