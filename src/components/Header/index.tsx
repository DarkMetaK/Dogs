import { useContext } from 'react'
import { Link } from 'react-router-dom'

import { HeaderContainer } from './styles'
import { UserContext } from '../../context/UserContext'
import { ReactComponent as Logo } from '../../assets/dogs.svg'

export function Header() {
  const { userData } = useContext(UserContext)

  return (
    <HeaderContainer>
      <nav className="container">
        <Link to="/" aria-label="Dogs - Home" className="logo">
          <Logo />
        </Link>
        {userData ? (
          <Link to="/conta" className="login">{userData.nome}</Link>
        ) : (
          <Link to="/login" className="login">Login / Criar</Link>
        )}
      </nav>
    </HeaderContainer>
  )
}
