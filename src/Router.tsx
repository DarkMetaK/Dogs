import { Route, Routes} from 'react-router-dom'

import { DefaultLayout } from './Layout/DefaultLayout'
import { Home } from './pages/Home'
import { Login } from './pages/Login'
import { LoginForm } from './pages/Login/components/LoginForm'
import { LoginCreate } from './pages/Login/components/LoginCreate'
import { LoginPasswordRecovery } from './pages/Login/components/Password/Recovery'
import { LoginPasswordReset } from './pages/Login/components/Password/Reset'
import { Conta } from './pages/Conta'

export function Router() {
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
        <Route path="/conta" element={ <Conta /> } />
      </Route>
    </Routes>
  )
}