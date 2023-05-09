import styled from 'styled-components'

export const ButtonContainer = styled.button`
  font-size: 1rem;
  font-family: var(--type-primary);
  cursor: pointer;
  border: none;
  border-radius: 0.4rem;
  background: #fb1;
  color: #764701;
  padding: 0.8rem 1.2rem;
  min-width: 8rem;
  transition: 0.1s;

  &:not(:disabled):hover, &:focus {
    outline: none;
    box-shadow: 0 0 0 3px #fea, 0 0 0 4px #fb1;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`
