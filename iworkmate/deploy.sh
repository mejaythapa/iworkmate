#!/bin/bash

echo "Deploying application..."

# Navigate to the project directory
cd "$(dirname "$0")"

# Pull latest changes
git pull origin main

# Return to parent directory
cd ..

# Rebuild and restart only the web service
docker-compose up -d --build web

echo "Application deployed successfully!" 