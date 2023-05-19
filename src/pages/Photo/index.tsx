import { useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { UseFetch } from '../../hooks/useFetch'
import { PHOTO_GET } from '../../lib/api'

import { PhotoContainer } from './styles'
import { Post } from '../../components/Post'
import { Loading } from '../../UI/Loading'
import { Error } from '../../UI/Error'

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

interface PhotoFullData {
  photo: PhotoData,
  comments: Comments[],
}

export function Photo() {
  const { id } = useParams()
  const { data, error, isLoading, request } = UseFetch()
  const photoData = data as PhotoFullData

  useEffect(() => {
    const { url, options} = PHOTO_GET(+String(id))
    request(url, options)
  }, [id, request])

  return (
    <PhotoContainer className='container mainContainer'>
      {error && <Error errorMessage={error}/>}
      {isLoading && <Loading />}
      {photoData && <Post photo={photoData.photo} comments={photoData.comments} single/>}
    </PhotoContainer>
  )
}