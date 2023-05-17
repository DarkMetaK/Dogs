import { HomeContainer } from './styles'
import { Feed } from '../../components/Feed'

export function Home() {
  return (
    <HomeContainer className='container mainContainer'>
      <Feed />
    </HomeContainer>
  )
}
