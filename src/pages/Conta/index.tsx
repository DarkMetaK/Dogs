import { Outlet } from 'react-router-dom'

import { ContainerConta } from './styles'
import { UserHeader } from './components/UserHeader'

export function Conta() {
  return (
    <ContainerConta className='container'>
      <UserHeader />
      <Outlet />
    </ContainerConta>
  )
}
