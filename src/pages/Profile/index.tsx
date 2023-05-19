import { useParams } from 'react-router-dom'

import { Feed } from '../../components/Feed'
import { Title } from '../../styles/global'
import { Head } from '../../UI/Head'

export function Profile() {
  const { username } = useParams()

  return (
    <>
    <Head title={username} />

    <section className='container mainContainer'>
      <Title>{username}</Title>
      <Feed userId={String(username)} />
    </section>    
    </>
  )
}