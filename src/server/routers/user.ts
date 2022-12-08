import { userSchema } from 'src/schemas/user'
import { publicProcedure, router } from '../trpc'

export const userRouter = router({
  create: publicProcedure.input(userSchema).mutation(async ({ input, ctx }) => {
    await ctx.prisma.user.create({
      data: {
        name: input.name,
        email: input.email,
      },
    })
  }),
  all: publicProcedure.query(async ({ ctx }) => {
    const users = await ctx.prisma.user.findMany()

    return {
      users,
    }
  }),
})

export type UserRouter = typeof userRouter
