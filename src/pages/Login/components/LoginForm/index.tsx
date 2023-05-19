import { FormEvent, useContext } from 'react'
import { Link } from 'react-router-dom'

import { useForm } from '../../../../hooks/useForm'
import { UserContext } from '../../../../context/UserContext'

import { Title } from '../../../../styles/global'
import { CreateNewAccountContainer, LoginFormContainer } from './styles'
import { Input } from '../../../../components/Input'
import { Button } from '../../../../components/Button'
import { Error } from '../../../../UI/Error'

export function LoginForm() {
  const { handleUserLogin, error, loading } = useContext(UserContext)
  const username = useForm()
  const password = useForm()

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    if (username.validate() && password.validate()) {
      handleUserLogin(username.value, password.value)
    }
  }

  return (
    <LoginFormContainer className='animeLeft'>
      <Title>Login</Title>
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
        <Button disabled={loading}>Entrar</Button>
        <Error errorMessage={error} />
      </form>
      <Link to="/login/recuperar" className='passwordLost'>Perdeu a Senha?</Link>
      <CreateNewAccountContainer>
        <h2>Cadastre-se</h2>
        <p>Ainda não possui conta? Cadastre-se no site.</p>
        <Button as={Link} to="/login/criar">Cadastro</Button>
      </CreateNewAccountContainer>
    </LoginFormContainer>
  )
}
