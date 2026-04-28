# 1. Stage Deps (Tetap sama)
FROM node:20-alpine AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app
COPY package.json yarn.lock* package-lock.json* pnpm-lock.yaml* ./
RUN npm ci

# 2. Stage Builder (DIBERSIHKAN)
FROM node:20-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# HAPUS BARIS COPY .env TADI! 
# Biarkan Next.js build TANPA tahu rahasianya dulu.
RUN npm run build

# 3. Stage Runner
FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production

RUN addgroup -g 1001 -S nodejs
RUN adduser -S nextjs -u 1001

# Copy standalone output
COPY --from=builder --chown=nextjs:nodejs /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs
EXPOSE 3000
ENV PORT=3000

# Next.js standalone akan membaca environment variable saat runtime (pas perintah ini jalan)
CMD HOSTNAME="0.0.0.0" node server.js