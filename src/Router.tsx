import { useContext } from 'react'
import { Navigate, Route, Routes} from 'react-router-dom'

import { UserContext } from './context/UserContext'
import { DefaultLayout } from './Layout/DefaultLayout'
import { Home } from './pages/Home'
import { Login } from './pages/Login'
import { LoginForm } from './pages/Login/components/LoginForm'
import { LoginCreate } from './pages/Login/components/LoginCreate'
import { LoginPasswordRecovery } from './pages/Login/components/Password/Recovery'
import { LoginPasswordReset } from './pages/Login/components/Password/Reset'
import { Conta } from './pages/Conta'
import { Feed } from './components/Feed'
import { UserPhotoPost } from './pages/Conta/components/UserPhotoPost'
import { UserStats } from './pages/Conta/components/UserStats'

export function Router() {
  const { login } = useContext(UserContext)

  return (
    <Routes>
      <Route path="/" element={ <DefaultLayout /> }>
        <Route path="/" element={ <Home /> } />
        <Route path="/login" element={ <Login /> }>
          <Route path="/login" element={ <LoginForm /> } />
          <Route path="/login/criar" element={ <LoginCreate /> } />
          <Route path="/login/recuperar" element={ <LoginPasswordRecovery /> } />
          <Route path="/login/resetar" element={ <LoginPasswordReset /> } />
        </Route>
        <Route path="/conta" element={ login ? <Conta /> : <Navigate to="/login" /> }>
          <Route path="/conta" element={ <Feed /> } />
          <Route path="/conta/postar" element={ <UserPhotoPost /> } />
          <Route path="/conta/estatisticas" element={ <UserStats /> } />
        </Route>
      </Route>
    </Routes>
  )
}