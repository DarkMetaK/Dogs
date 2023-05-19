import { useContext } from 'react'
import { Link } from 'react-router-dom'

import { UserContext } from '../../context/UserContext'

import { PostContainer } from './styles'
import { Title } from '../../styles/global'
import { Comments } from '../Comments'
import { DeletePhoto } from './DeletePhoto'
import { ImageSkeleton } from '../../UI/ImageSkeleton'

interface PhotoData {
  acessos: string,
  author: string,
  date: string,
  id: number,
  idade: string,
  peso: string,
  src: string,
  title: string,
  total_comments: string,
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
  comments: Comments[],
  single?: boolean
}

export function Post({ photo, comments, single=false }: PostProps) {
  const { userData } = useContext(UserContext)

  return (
    <PostContainer className={single ? 'single' : ''}>
      <div className="image">
        <ImageSkeleton src={photo.src} alt={photo.title} />
      </div>
      <div className="details">
        <div className="about">
          <p className="author">
            {userData && userData.username === photo.author ? (
              <DeletePhoto photoId={photo.id} />
            ) : (
              <>
              <Link to={`/perfil/${photo.author}`}>@{photo.author}</Link>
              <span>{photo.acessos}</span>                
              </>
            )}
          </p>
          <Title>
            <Link to={`/foto/${photo.id}`}>{photo.title}</Link>
          </Title>
          <ul className="attributes">
            <li>{photo.peso} kg</li>
            <li>{photo.idade} anos</li>
          </ul>
        </div>
      </div>
      <Comments comments={comments} photoId={photo.id} single={single} />
    </PostContainer>
  )
}