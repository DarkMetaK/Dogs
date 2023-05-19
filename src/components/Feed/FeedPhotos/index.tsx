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
  userId?: number | string,
  desiredPage?: number,
  setModalPhoto: Dispatch<React.SetStateAction<PhotoData | null>>,
  setHaveAvailablePhotos: Dispatch<React.SetStateAction<boolean>>,
}

export function FeedPhotos({userId=0, desiredPage=1, setModalPhoto, setHaveAvailablePhotos} : FeedPhotoProps) {
  const { data, isLoading, error, request } = UseFetch()
  const photos = data as PhotoData[]

  useEffect(() => {
    async function fetchPhotos() {
      const { url, options } = PHOTOS_GET({ page: desiredPage, total: 6, user: userId })
      const { response, json } = await request(url, options)

      if (response && response.ok && json.length < 6) setHaveAvailablePhotos(false)
    }
    fetchPhotos()
  }, [desiredPage, request, setHaveAvailablePhotos, userId])

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

