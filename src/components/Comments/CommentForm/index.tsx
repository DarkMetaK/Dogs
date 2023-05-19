import { Dispatch, FormEvent, useState } from 'react'

import { UseFetch } from '../../../hooks/useFetch'
import { COMMENT_POST } from '../../../lib/api'

import { CommentFormContainer } from './styles'
import { ReactComponent as Enviar } from '../../../assets/enviar.svg'
import { Error } from '../../../UI/Error'

interface Comment {
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

interface CommentFormProps {
  photoId: number,
  setRetrievedComments: Dispatch<React.SetStateAction<Comment[]>>,
  single?: boolean,
}

export function CommentForm({photoId, setRetrievedComments, single=false} : CommentFormProps) {
  const { error, request} = UseFetch()

  const [ comment, setComment ] = useState('')

  async function handleSubmitComment(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const token = window.localStorage.getItem('token')
    const { url, options } = COMMENT_POST(String(token), photoId, {comment})
    const { response, json } = await request(url, options)

    if (response?.ok){
      const commentInformation = json as Comment
      setComment('')
      setRetrievedComments((previousComments) => [...previousComments, commentInformation])
    }
  }

  return (
    <CommentFormContainer onSubmit={handleSubmitComment} className={single ? 'single' : ''}>
      <textarea
        id="comment"
        name="comment"
        placeholder="Seu comentário..."
        value={comment}
        onChange={({ target }) => setComment(target.value)}
      />
      <button aria-label="Enviar" type="submit">
        <Enviar />
      </button>
      {error && <Error errorMessage={error} />}
    </CommentFormContainer>
  )
}
