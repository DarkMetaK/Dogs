import { InputHTMLAttributes } from 'react'
import { InputContainer } from './styles'

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
      {error && <p>{error}</p>}
    </InputContainer>
  )
}
