FROM node:20-bullseye-slim

# Set the working directory
WORKDIR /usr/src/app

# Copy package files first for better caching
COPY package*.json ./

# Install OS-level build dependencies required by some native modules (e.g. argon2)
RUN apt-get update \
	&& apt-get install -y --no-install-recommends python3 build-essential ca-certificates libpq-dev \
	&& npm ci --production=false \
	&& apt-get purge -y --auto-remove python3 build-essential \
	&& rm -rf /var/lib/apt/lists/*

# Copy application source
COPY . .

# Expose application port
EXPOSE 3000

# Default command: wait for DB, run migrations/seed then start dev server
CMD ["sh", "-c", "node src/wait-for-db.js && npm run db:create && npm run db:alter:service-status && npm run db:seed && npm run dev"]