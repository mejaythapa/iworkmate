#!/bin/bash

echo "🚀 Deploying latest changes..."

# Go to app directory
cd ~/n8n-docker-caddy/iworkmate || exit

# Pull latest changes
git pull origin main

# Go back to root folder where docker-compose.yml lives
cd ..

# Rebuild only web service and restart
docker compose up -d --build web

echo "✅ Deployment complete."
