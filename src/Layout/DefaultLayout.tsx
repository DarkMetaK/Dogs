import styled from 'styled-components'
import { Outlet } from 'react-router-dom'

import { Footer } from '../components/Footer'
import { Header } from '../components/Header'

const LayoutContainer = styled.main`
  display: flex;
  flex-direction: column;
  min-height: calc(100vh + 10rem);

  .content {
    flex: 1;
  }
`

export function DefaultLayout() {
  return (
    <LayoutContainer>
    <Header />
    <div className='content'>
      <Outlet />      
    </div>
    <Footer />
    </LayoutContainer>
  )
}
