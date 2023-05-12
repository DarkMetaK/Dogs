import { InputHTMLAttributes } from 'react'

import { InputContainer } from './styles'
import { Error } from '../../UI/Error'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string,
  error?: string | null,
}

export function Input({ label, error, ...rest }: InputProps) {
  return (
    <InputContainer>
      <label>
        {label}
        <input type="text" {...rest} />
      </label>
     <Error errorMessage={error} />
    </InputContainer>
  )
}
