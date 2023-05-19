import { Outlet } from 'react-router-dom'

import { ContainerConta } from './styles'
import { UserHeader } from './components/UserHeader'
import { Head } from '../../UI/Head'

export function UserAccount() {
  return (
    <>
    <Head title="Minha Conta" />

    <ContainerConta className='container'>
      <UserHeader />
      <Outlet />
    </ContainerConta>    
    </>
  )
}
