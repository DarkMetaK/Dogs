import { Link } from 'react-router-dom'

import { HeaderContainer } from './styles'
import { ReactComponent as Logo } from '../../assets/dogs.svg'

export function Header() {
  return (
    <HeaderContainer className='container'>
      <nav>
        <Link to="/" aria-label="Dogs - Home" className="logo">
          <Logo />
        </Link>
        <Link to="/login" className="login">Login / Criar</Link>
      </nav>
    </HeaderContainer>
  )
}
