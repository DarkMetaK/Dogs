import { FormEvent } from 'react'

import { useForm } from '../../../../../hooks/useForm'
import { UseFetch } from '../../../../../hooks/useFetch'

import { Title } from '../../../../../styles/global'
import { Input } from '../../../../../components/Input'
import { Button } from '../../../../../components/Button'
import { PASSWORD_LOST } from '../../../../../lib/api'
import { Error } from '../../../../../UI/Error'
import { Head } from '../../../../../UI/Head'

export function LoginPasswordRecovery() {
  const login = useForm()
  const { data, error, isLoading, request } = UseFetch()

  async function handleResetPassword(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    if (login.validate()) {
      const { url, options } = PASSWORD_LOST({
        login: login.value,
        url: window.location.href.replace('recuperar', 'resetar'),
      })
      await request(url, options)
    }
  }
  return (
    <>
    <Head title="Perdeu a Senha" />

    <section>
      <Title>Perdeu a senha?</Title>
      {data ? (
        <p style={{color: '#4c1'}}>{data as string}</p>
      ) : (
        <form onSubmit={handleResetPassword}>
          <Input
            label="Email / Usuário"
            name="login"
            value={login.value}
            onChange={login.onChange}
            onBlur={login.onBlur}
            error={login.error}
          />
          <Button type="submit" disabled={isLoading}>Enviar Email</Button>
        </form>        
      )}
      {error && <Error errorMessage={error}/> }
    </section>    
    </>
  )
}