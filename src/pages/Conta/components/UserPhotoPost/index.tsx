import { ChangeEvent, FormEvent, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { useForm } from '../../../../hooks/useForm'
import { UseFetch } from '../../../../hooks/useFetch'
import { PHOTO_POST } from '../../../../lib/api'

import { UserPhotoPostContainer } from './styles'
import { Input } from '../../../../components/Input'
import { Button } from '../../../../components/Button'
import { Error } from '../../../../UI/Error'

interface UploadedImageProps {
  raw: File,
  preview: string,
}

export function UserPhotoPost() {
  const name = useForm()
  const weight = useForm('number')
  const age = useForm('number')
  const [ uploadedImage, setUploadedImage ] = useState<UploadedImageProps>({} as UploadedImageProps)
  const { data, error, isLoading, request } = UseFetch()

  const navigate = useNavigate()
  useEffect(() => {
    if(data) navigate('/conta')
  }, [data, navigate])

  function handleImageChange(event: ChangeEvent<HTMLInputElement>) {
    const fileList = event.target.files as FileList
    setUploadedImage({
      raw: fileList[0],
      preview: URL.createObjectURL(fileList[0])
    })
  }

  async function handlePhotoSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    if (!name.validate() || !weight.validate() || !age.validate() || !uploadedImage.preview) return

    const formData = new FormData()
    formData.append('img', uploadedImage.raw)
    formData.append('nome', name.value)
    formData.append('peso', weight.value)
    formData.append('idade', age.value)

    const token = window.localStorage.getItem('token')
    const { url, options } = PHOTO_POST(String(token), formData)
    request(url, options)
  }

  return (
    <UserPhotoPostContainer className='animeLeft'>
      <form onSubmit={handlePhotoSubmit}>
        <Input
          label='Nome'
          name='nome'
          value={name.value}
          error={name.error}
          onChange={name.onChange}
          onBlur={name.onBlur}
        />
        <Input
          label='Peso'
          name='peso'
          type='number'
          min={0}
          value={weight.value}
          error={weight.error}
          onChange={weight.onChange}
          onBlur={weight.onBlur}
        />
        <Input
          label='Idade'
          name='idade'
          min={0}
          value={age.value}
          error={age.error}
          onChange={age.onChange}
          onBlur={age.onBlur}
        />
        <input
          type="file"
          name="img"
          id="img"
          onChange={handleImageChange}
        />
        <Button disabled={isLoading}>Enviar</Button>
        {error && <Error errorMessage={error}/>}
      </form>

      <div>
        {uploadedImage.preview && 
          <div style={{backgroundImage: `url(${uploadedImage.preview})`}}/>
        }
      </div>
    </UserPhotoPostContainer>
  )
}