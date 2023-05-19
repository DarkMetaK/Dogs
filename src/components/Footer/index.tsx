import { FooterContainer } from './styles'
import {ReactComponent as Dogs} from '../../assets/dogs-footer.svg'

export function Footer() {
  return (
    <FooterContainer>
      <Dogs />
      <p>Dogs. Alguns direitos reservados.</p>
    </FooterContainer>
  )
}
