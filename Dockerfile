# Multi-stage production build for Google Cloud Run
# Stage 1: Build the static application
FROM oven/bun:1-alpine AS builder

WORKDIR /app

COPY package.json bun.lock* ./
RUN bun install --frozen-lockfile

COPY . .
RUN bun run build

# Stage 2: Minimal production container
FROM oven/bun:1-alpine AS runner

WORKDIR /app
ENV NODE_ENV=production
ENV PORT=8080

COPY package.json bun.lock* ./
RUN bun install --production --frozen-lockfile

COPY --from=builder /app/dist ./dist
COPY server.mjs ./

EXPOSE 8080

CMD ["bun", "run", "server.mjs"]
