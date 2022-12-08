import { ButtonHTMLAttributes } from 'react'
import styled from 'styled-components'

const StyledButton = styled.button``

export type IButton = ButtonHTMLAttributes<HTMLButtonElement> & {}

export const Button = ({ ...rest }: IButton) => {
  return <StyledButton {...rest} />
}
