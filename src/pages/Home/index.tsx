import { HomeContainer } from './styles'
import { Feed } from '../../components/Feed'
import { Head } from '../../UI/Head'

export function Home() {
  return (
    <>
    <Head title="Fotos" description="Home do site Dogs" />

    <HomeContainer className="container mainContainer">
      <Feed />
    </HomeContainer>    
    </>
  )
}
