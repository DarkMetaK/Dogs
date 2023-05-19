import { FormEvent, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { useForm } from '../../../../../hooks/useForm'
import { UseFetch } from '../../../../../hooks/useFetch'

import { Title } from '../../../../../styles/global'
import { Input } from '../../../../../components/Input'
import { Button } from '../../../../../components/Button'
import { PASSWORD_RESET } from '../../../../../lib/api'
import { Error } from '../../../../../UI/Error'

export function LoginPasswordReset() {
  const navigate = useNavigate()
  const password = useForm()
  const { error, isLoading, request } = UseFetch()

  const [login, setLogin] = useState<string | null>(null)
  const [key, setKey] = useState<string | null>(null)

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const retrievedKey = params.get('key')
    const retrievedLogin = params.get('login')

    if (retrievedKey && retrievedLogin) {
      setLogin(retrievedLogin)
      setKey(retrievedKey)
    }
  }, [])

  async function handleResetPassword(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    if (password.validate()) {
      const { url, options } = PASSWORD_RESET({
        login,
        key,
        password: password.value
      })
      const { response } = await request(url, options)

      if (response && response.ok) navigate('/login')      
    }
  }

  return (
    <div>
      <Title>Resete a senha</Title>
      <form onSubmit={handleResetPassword}>
        <Input
          label="Nova Senha"
          type="password"
          value={password.value}
          onChange={password.onChange}
          onBlur={password.onBlur}
          error={password.error}
        />
        <Button disabled={isLoading}>Resetar</Button>        
      </form>
      {error && <Error errorMessage={error} />}
    </div>
  )
}
