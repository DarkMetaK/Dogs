import styled from 'styled-components'

import { UseFetch } from '../../hooks/useFetch'
import { PHOTO_DELETE } from '../../lib/api'

const ButtonContainer = styled.button`
  background-color: #ddd;
  padding: 0.3rem 0.6rem;
  line-height: 1;
  border: 1px solid transparent;
  font-size: 0.875rem;
  font-family: var(--type-primary);
  cursor: pointer;
  border-radius: 0.4rem;
  transition: 0.1s;

  &:focus, &:hover {
    outline: none;
    background-color: white;
    box-shadow: 0 0 0 3px #eee;
    border-color: #333;
  }
`

interface DeletePhotoProps {
  photoId: number
}

export function DeletePhoto({ photoId }: DeletePhotoProps) {
  const { isLoading, request } = UseFetch()

  async function handleDeletePhoto() {
    const confirm = window.confirm('Tem certeza que deseja deletar?')
    if (confirm) {
      const token = window.localStorage.getItem('token')
      const { url, options } = PHOTO_DELETE(String(token), photoId)
      const { response } = await request(url, options)

      if (response?.ok) window.location.reload()      
    }
  }

  return (
    <ButtonContainer
      onClick={handleDeletePhoto}
      disabled={isLoading}
    >
      Deletar
    </ButtonContainer>
  )
}
