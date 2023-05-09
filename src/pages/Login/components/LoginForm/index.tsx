import { FormEvent, useContext } from 'react'
import { Link } from 'react-router-dom'

import { useForm } from '../../../../hooks/useForm'
import { UserContext } from '../../../../context/UserContext'

import { LoginFormContainer } from './styles'
import { Input } from '../../../../components/Input'
import { Button } from '../../../../components/Button'

export function LoginForm() {
  const { handleUserLogin } = useContext(UserContext)
  const username = useForm()
  const password = useForm()

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    if (username.validate() && password.validate()) {
      handleUserLogin(username.value, password.value)
    }
  }

  return (
    <LoginFormContainer>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <Input
          label="Usuário"
          error={username.error}
          value={username.value}
          onChange={username.onChange}
          onBlur={username.onBlur}
        />
        <Input
          label="Senha"
          error={password.error}
          type="password"
          value={password.value}
          onChange={password.onChange}
          onBlur={password.onBlur}
        />
        <Button>Entrar</Button>
      </form>
      <Link to="/login/criar">Cadastro</Link>
    </LoginFormContainer>
  )
}
