import { PrismaClient } from '@prisma/client'

export const prisma = new PrismaClient({
  log:
    process.env.NODE_ENV === 'development'
      ? ['error', 'warn', 'query']
      : ['error'],
})