import { useEffect, MouseEvent, Dispatch } from 'react'

import { UseFetch } from '../../../hooks/useFetch'
import { PHOTO_GET } from '../../../lib/api'

import { FeedModalContainer } from './styles'
import { Error } from '../../../UI/Error'
import { Loading } from '../../../UI/Loading'
import { Post } from '../../Photo/Post'

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

interface FeedModalProps {
  photoId: number,
  setModalPhoto: Dispatch<React.SetStateAction<PhotoData | null>>
}

export function FeedModal({ photoId, setModalPhoto }: FeedModalProps) {
  const { data, error, isLoading, request } = UseFetch()
  const photoData = data as PhotoFullData

  useEffect(() => {
    const { url, options } = PHOTO_GET(photoId)
    request(url, options)
  }, [photoId, request])

  function handleOutsideClick(event: MouseEvent<HTMLElement>) {
    if (event.target === event.currentTarget) setModalPhoto(null)
  }

  return (
    <FeedModalContainer onClick={handleOutsideClick}>
      {error && <Error errorMessage={error}/>}
      {isLoading && <Loading />}
      {photoData && <Post photo={photoData.photo} comments={photoData.comments}/>}
    </FeedModalContainer>
  )
}