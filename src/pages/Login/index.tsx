import { useContext } from 'react'
import { Navigate, Outlet } from 'react-router-dom'

import { LoginContainer } from './styles'
import { UserContext } from '../../context/UserContext'

export function Login() {
  const { login } = useContext(UserContext)

  if (login) return <Navigate to="/conta" />
  return (
    <LoginContainer>
      <div>
        <Outlet />  
      </div>  
    </LoginContainer>
  )
}
