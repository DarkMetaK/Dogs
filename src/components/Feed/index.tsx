import { useEffect, useState } from 'react'

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

interface FeedProps {
  userId?: number | string
}

export function Feed({ userId }: FeedProps) {
  const [ modalPhoto, setModalPhoto ] = useState<PhotoData | null>(null)
  const [ pages, setPages ] = useState([1])
  const [ haveAvailablePhotos, setHaveAvailablePhotos ] = useState(true)

  useEffect(() => {
    let wait = false
    function handleInfiniteScroll() {
      if (haveAvailablePhotos) {
        const scrollValue = window.scrollY
        const pageTotalHeight = document.body.offsetHeight - window.innerHeight
        
        if (scrollValue > pageTotalHeight * 0.75 && !wait) {
          setPages((state) => [...state, state.length + 1])
          wait = true
          setTimeout(() => wait = false, 500)
        }
      }
    }

    window.addEventListener('wheel', handleInfiniteScroll)
    window.addEventListener('scroll', handleInfiniteScroll)

    return () => {
      window.removeEventListener('wheel', handleInfiniteScroll)
      window.removeEventListener('scroll', handleInfiniteScroll)
    }
  }, [haveAvailablePhotos])

  return (
    <div>
      {modalPhoto && <FeedModal photoId={modalPhoto.id} setModalPhoto={setModalPhoto} />}
      {pages.map(page => (
        <FeedPhotos
          key={page}
          userId={userId}
          desiredPage={page}
          setModalPhoto={setModalPhoto}
          setHaveAvailablePhotos={setHaveAvailablePhotos}
        />
      ))}
    </div>
  )
}