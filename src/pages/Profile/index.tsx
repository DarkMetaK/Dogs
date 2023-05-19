import { useParams } from 'react-router-dom'

import { Feed } from '../../components/Feed'
import { Title } from '../../styles/global'

export function Profile() {
  const { username } = useParams()

  return (
    <section className='container mainContainer'>
      <Title>{username}</Title>
      <Feed userId={String(username)} />
    </section>
  )
}