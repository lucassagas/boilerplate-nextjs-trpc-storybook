import { trpc } from '@/utils/trpc'
import { zodResolver } from '@hookform/resolvers/zod'
import { useCallback } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { userSchema, UserSchema } from 'src/schemas/user'

export default function Home() {
  const { user } = trpc
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<UserSchema>({
    resolver: zodResolver(userSchema),
  })

  const { data, refetch } = user.all.useQuery()
  const { mutateAsync: createUser } = user.create.useMutation({
    onSuccess: () => {
      refetch()
      reset()
    },
  })

  const onSubmit: SubmitHandler<UserSchema> = useCallback(
    async (data): Promise<void> => {
      await createUser(data)
    },
    [createUser]
  )

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register('name')} placeholder="Nome" />
        <p>{errors?.name?.message}</p>
        <input {...register('email')} placeholder="Email" />
        <p>{errors?.email?.message}</p>
        <button type="submit">Submit</button>
      </form>
      {data?.users.map((user) => (
        <span key={user.id}>{user.name}</span>
      ))}
    </>
  )
}
