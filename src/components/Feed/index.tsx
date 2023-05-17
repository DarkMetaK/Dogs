import { useState } from 'react'

import { FeedModal } from './FeedModal'
import { FeedPhotos } from './FeedPhotos'

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

export function Feed() {
  const [ modalPhoto, setModalPhoto ] = useState<PhotoData | null>(null)

  return (
    <div>
      {modalPhoto && <FeedModal photoId={modalPhoto.id} setModalPhoto={setModalPhoto} />}
      <FeedPhotos setModalPhoto={setModalPhoto}/>
    </div>
  )
}