import { ChangeEvent, useState } from 'react'

const types = {
  email: {
    regex: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    message: 'Preencha um email válido',
  },
}

export function useForm(type?: 'email' | boolean) {
  const [ value, setValue ] = useState('')
  const [ error, setError ] = useState<string | null>('')

  function validate(value: string) {
    if (type === false) return true

    if (value.length === 0){
      setError('Preencha um valor.')
      return false
    }
    else if (typeof type === 'string' && !types[type].regex.test(value)) {
      setError(types.email.message)
      return false
    } else {
      setError(null)
      return true
    }
  }

  function onChange({ target }: ChangeEvent<HTMLInputElement>) {
    if (error) validate(target.value)
    setValue(target.value)
  }

  return {
    value,
    error,
    setValue,
    onChange,
    validate: () => validate(value),
    onBlur: () => validate(value),
  }
}
