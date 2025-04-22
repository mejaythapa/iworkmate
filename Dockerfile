# Use Node 18 Alpine image as the base
FROM node:18-alpine AS builder

# Set the working directory inside the container
WORKDIR /app

# Copy only package files to install dependencies
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the project files
COPY . .

# Copy .env file into container (required at build time for NEXT_PUBLIC_*)
COPY .env .env

# Build the Next.js app
RUN npm run build

# ---------------------------

# Use a lightweight image for production
FROM node:18-alpine

# Set the working directory
WORKDIR /app

# Copy built assets from builder stage
COPY --from=builder /app ./

# Install only production dependencies
RUN npm install --omit=dev

# Expose the Next.js port
EXPOSE 3000

# Run the Next.js app in production mode
CMD ["npm", "start"]
