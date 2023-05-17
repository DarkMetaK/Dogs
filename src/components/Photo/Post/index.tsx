import { Link } from 'react-router-dom'

import { PostContainer } from './styles'
import { Title } from '../../../styles/global'
import { Comments } from '../../Comments'

interface PhotoData {
  acessos: string,
  author: string,
  date: string,
  id: number,
  idade: string,
  peso: string,
  src: string,
  title: string,
  total_comments: string
}

interface Comments {
  comment_ID: string,
  comment_post_ID: string,
  comment_author: string,
  comment_author_email: string,
  comment_author_url: string,
  comment_author_IP: string,
  comment_date: string,
  comment_date_gmt: string,
  comment_content: string,
  comment_karma: string,
  comment_approved: string,
  comment_agent: string,
  comment_type: string,
  comment_parent: string,
  user_id: string,
}

interface PostProps {
  photo: PhotoData,
  comments: Comments[]
}

export function Post({ photo, comments }: PostProps) {
  return (
    <PostContainer>
      <div className="image">
        <img src={photo.src} alt={photo.title} />
      </div>
      <div className="details">
        <div className="about">
          <p className='author'>
            <Link to={`/perfil/${photo.author}`}>@{photo.author}</Link>
            <span>{photo.acessos}</span>
          </p>
          <Title>
            <Link to={`/foto/${photo.id}`}>{photo.title}</Link>
          </Title>
          <ul className='attributes'>
            <li>{photo.peso} kg</li>
            <li>{photo.idade} anos</li>
          </ul>
        </div>
      </div>
      <Comments comments={comments}/>
    </PostContainer>
  )
}