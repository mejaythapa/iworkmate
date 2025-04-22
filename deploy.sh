#!/bin/bash

echo "Deploying application..."

# Pull latest changes
git pull origin main

# Build and restart containers
docker-compose down
docker-compose up -d --build

echo "Application deployed successfully!" 