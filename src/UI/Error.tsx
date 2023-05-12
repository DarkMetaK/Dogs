import styled from 'styled-components'

const ErrorContainer = styled.p`
  color: #f31;
  margin: 1rem 0;
`

interface ErrorProps {
  errorMessage?: string | null
}

export function Error({ errorMessage }: ErrorProps) {
  if (!errorMessage) return null
  return (
    <ErrorContainer>{errorMessage}</ErrorContainer>
  )
}