# Calgary Council Values Matcher — Deployment Plan

## Current Deployment
- Ubuntu server
- Next.js 16
- PM2 process: calgary-council-values
- Production commands:
  - npm run build
  - pm2 restart calgary-council-values
  - pm2 save

## Future Deployment Goal
The project should eventually be containerized with Docker so it can move cleanly to DigitalOcean without being tightly coupled to the current server.

## Docker Goal
Docker should provide:
- repeatable Node environment
- production build consistency
- portable deployment package
- easier DigitalOcean migration
- clean separation from other server projects

## Timing
Do not containerize until:
1. real score output is connected to frontend
2. scoring receipts are planned or started
3. current PM2 deployment is stable
4. build process is clean

## Preferred Future Shape
- Dockerfile
- .dockerignore
- docker-compose.yml
- environment variable documentation
- production build command
- healthcheck
- DigitalOcean deployment notes

## Rule
Containerization must not change scoring logic, data files, methodology, or frontend trust language.
