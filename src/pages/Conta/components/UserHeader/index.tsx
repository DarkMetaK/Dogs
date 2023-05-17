import { useContext, useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'

import { useMedia } from '../../../../hooks/useMedia'

import { Title } from '../../../../styles/global'
import { UserHeaderContainer, UserHeaderNav } from './styles'
import { UserContext } from '../../../../context/UserContext'
import { ReactComponent as MyPhotosIcon } from '../../../../assets/feed.svg'
import { ReactComponent as StaticsIcon } from '../../../../assets/estatisticas.svg'
import { ReactComponent as AddNewPhotoIcon } from '../../../../assets/adicionar.svg'
import { ReactComponent as LogoutIcon } from '../../../../assets/sair.svg'

export function UserHeader() {
  const { handleUserLogout } = useContext(UserContext)
  
  const [ title, setTitle ] = useState('')
  const location = useLocation()
  useEffect(() => {
    const locationPath = location.pathname.split('/')
    setTitle(locationPath[locationPath.length - 1])
    setMobileMenuIsOpen(false)
  }, [location])

  const isMobile = useMedia('(max-width: 40rem)').mediaMatchSize
  const [ mobileMenuIsOpen, setMobileMenuIsOpen ] = useState(false)

  return (
    <UserHeaderContainer>
      <Title style={{textTransform: 'capitalize'}}>{title}</Title>

      {isMobile && (
        <button
          className={`${mobileMenuIsOpen && 'active'} menuButton`}
          aria-label="Menu"
          onClick={() => setMobileMenuIsOpen(!mobileMenuIsOpen)}
        >

        </button>        
      )}

      <UserHeaderNav className={`${isMobile && 'mobile'} ${mobileMenuIsOpen && 'active'}`}>
        <NavLink to="/conta" end>
          <MyPhotosIcon />{isMobile && ' Minhas Fotos'}
        </NavLink>
        <NavLink to="/conta/estatisticas">
          <StaticsIcon />{isMobile && ' Estatísticas'}
        </NavLink>
        <NavLink to="/conta/postar">
          <AddNewPhotoIcon />{isMobile && ' Adicionar Foto'}
        </NavLink>
        <button onClick={handleUserLogout}>
          <LogoutIcon />{isMobile && ' Sair'}
        </button>
      </UserHeaderNav>

    </UserHeaderContainer>
  )
}