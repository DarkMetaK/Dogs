import { Route, Routes} from 'react-router-dom'

import { DefaultLayout } from './Layout/DefaultLayout'
import { Home } from './pages/Home'
import { Login } from './pages/Login'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={ <DefaultLayout /> }>
        <Route path="/" element={ <Home /> } />
        <Route path="/login" element={ <Login /> } />
      </Route>
    </Routes>
  )
}