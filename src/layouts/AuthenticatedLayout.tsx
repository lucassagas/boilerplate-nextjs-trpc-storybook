import { ReactNode } from 'react'

type IAuthenticatedLayout = {
  children: ReactNode
}

export const AuthenticatedLayout = ({
  children,
}: IAuthenticatedLayout): JSX.Element => {
  return (
    <div>
      <h1>Layout</h1>
      {children}
    </div>
  )
}
