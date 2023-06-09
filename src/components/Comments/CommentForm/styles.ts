import styled from 'styled-components'

export const CommentFormContainer = styled.form`
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: stretch;
  margin: 1rem;

  &.single {
    margin: 1rem 0;
  }

  textarea {
    display: block;
    width: 100%;
    font-size: 1rem;
    font-family: var(--type-primary);
    resize: none;
    border: 1px solid #eee;
    padding: 0.5rem;
    border-radius: 0.2rem;
    background-color: #eee;
    transition: 0.2s;

    &:focus, &:hover {
      outline: none;
      border-color: #fb1;
      background-color: white;
      box-shadow: 0 0 0 3px #fea;
    }
  }

  button {
    border: none;
    cursor: pointer;
    color: #333;
    background-color: transparent;
    font-size: 1rem;
    padding: 0 1rem;
    overflow: hidden;
    outline: none;

    &:focus, &:hover {
      svg {
        path {
          fill: #fea;
          stroke: #fb1;  
        }
        g {
          animation: latir 0.6s infinite;
        }
      }
    }
  }

  @keyframes latir {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`