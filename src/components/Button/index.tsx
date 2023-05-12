import { ComponentProps, ReactNode } from 'react'
import { ButtonContainer } from './styles'

interface ButtonProps extends ComponentProps<typeof ButtonContainer>{
  children: ReactNode
}

export function Button({ children, ...rest }: ButtonProps) {
  return (
    <ButtonContainer {...rest}>
      {children}
    </ButtonContainer>
  )
}
