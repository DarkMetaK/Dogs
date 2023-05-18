import { Dispatch } from 'react'

import { PhotoItemContainer } from './styles'
import { ImageSkeleton } from '../../../UI/ImageSkeleton'

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

interface FeedPhotosItemProps {
  photo: PhotoData,
  setModalPhoto: Dispatch<React.SetStateAction<PhotoData | null>>
}

export function FeedPhotosItem({photo, setModalPhoto}: FeedPhotosItemProps) {
  function handleSetModalPhoto() {
    setModalPhoto(photo)
  }

  return (
    <PhotoItemContainer onClick={handleSetModalPhoto}>
      <ImageSkeleton src={photo.src} alt={photo.title} />
      <span>{photo.acessos}</span>
    </PhotoItemContainer>
  )
}