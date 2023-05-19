import { FormEvent, useContext } from 'react'

import { UserContext } from '../../../../context/UserContext'
import { useForm } from '../../../../hooks/useForm'
import { UseFetch } from '../../../../hooks/useFetch'
import { USER_POST } from '../../../../lib/api'

import { Title } from '../../../../styles/global'
import { Input } from '../../../../components/Input'
import { Button } from '../../../../components/Button'
import { Error } from '../../../../UI/Error'
import { Head } from '../../../../UI/Head'

export function LoginCreate() {
  const { handleUserLogin } = useContext(UserContext)

  const user = useForm()
  const email = useForm('email')
  const password = useForm()
  const { isLoading, error, request } = UseFetch()

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    if (!user.validate() || !email.validate() || !password.validate()) return

    const { url, options } = USER_POST({
      username: user.value,
      email: email.value,
      password: password.value,
    })
    const { response } = await request(url, options)
    if (response?.ok) handleUserLogin(user.value, password.value)
  }
  
  return (
    <>
    <Head title="Crie a sua conta" />
    
    <section className="animeLeft">
      <Title>Cadastre-se</Title>
      <form onSubmit={handleSubmit}>
        <Input
          label='Usuário'
          value={user.value}
          onChange={user.onChange}
          onBlur={user.onBlur}
          error={user.error}
        />
        <Input
          label='E-mail'
          type='email'
          value={email.value}
          onChange={email.onChange}
          onBlur={email.onBlur}
          error={email.error}
        />
        <Input
          label='Senha'
          type='password'
          value={password.value}
          onChange={password.onChange}
          onBlur={password.onBlur}
          error={password.error}
        />
        <Button disabled={isLoading}>Cadastrar</Button>
        <Error errorMessage={error}/>
      </form>
    </section>    
    </>
  )
}
