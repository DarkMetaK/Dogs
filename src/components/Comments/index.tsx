import { useContext, useEffect, useRef, useState } from 'react'

import { UserContext } from '../../context/UserContext'

import { CommentsContainer } from './styles'
import { CommentForm } from './CommentForm'

interface CommentsProps {
  comments: {
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
  }[],
  photoId: number,
  single?: boolean
}

export function Comments({ comments, photoId, single=false }: CommentsProps) {
  const { login } = useContext(UserContext)

  const [ retrievedComments, setRetrievedComments ] = useState(() => [...comments])
  const commentsSection = useRef<HTMLUListElement>(null)

  useEffect(() => {
    commentsSection.current && (commentsSection.current.scrollTop  = commentsSection.current.scrollHeight)
  }, [retrievedComments])

  return (
    <>
      <CommentsContainer ref={commentsSection} className={single ? 'single' : ''}>
        {retrievedComments.map(comment => 
          <li key={comment.comment_ID}>
            <b>{comment.comment_author}: </b>
            <span>{comment.comment_content}</span>
          </li>
        )}
      </CommentsContainer>
      {login && <CommentForm photoId={photoId} setRetrievedComments={setRetrievedComments} single={single} />}
    </>
  )
}