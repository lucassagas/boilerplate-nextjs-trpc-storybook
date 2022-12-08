import { z } from 'zod'

export const userSchema = z.object({
  name: z.string().min(1, { message: 'name field is required' }),
  email: z
    .string()
    .email({ message: 'digit a valid email' })
    .min(1, { message: 'email field is required' }),
})

export type UserSchema = z.infer<typeof userSchema>
