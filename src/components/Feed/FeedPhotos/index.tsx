import { Dispatch, useEffect } from 'react'

import { UseFetch } from '../../../hooks/useFetch'
import { PHOTOS_GET } from '../../../lib/api'

import { FeedPhotosContainer } from './styles'
import { FeedPhotosItem } from './PhotoItem'
import { Error } from '../../../UI/Error'
import { Loading } from '../../../UI/Loading'

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

interface FeedPhotoProps {
  setModalPhoto: Dispatch<React.SetStateAction<PhotoData | null>>
}

export function FeedPhotos({setModalPhoto} : FeedPhotoProps) {
  const { data, isLoading, error, request } = UseFetch()
  const photos = data as PhotoData[]

  useEffect(() => {
    async function fetchPhotos() {
      const { url, options } = PHOTOS_GET({ page: 1, total: 6, user: 0 })
      request(url, options)
    }
    fetchPhotos()
  }, [request])

  if (error) return <Error errorMessage={error}/>
  if (isLoading) return <Loading />
  if (data) return (
    <FeedPhotosContainer className='animeLeft'>
      {photos.map(photo => 
        <FeedPhotosItem
          key={photo.id}
          photo={photo}
          setModalPhoto={setModalPhoto}
        />
      )}
    </FeedPhotosContainer>
  )
  else return null
}

