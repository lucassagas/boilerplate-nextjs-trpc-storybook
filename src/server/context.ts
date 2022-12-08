import { prisma } from '@/utils/prisma'
import { inferAsyncReturnType } from '@trpc/server'

export const createContext = async () => {
  return {
    prisma,
  }
}

export type Context = inferAsyncReturnType<typeof createContext>
