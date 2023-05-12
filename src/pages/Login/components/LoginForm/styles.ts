import styled from 'styled-components'

export const LoginFormContainer = styled.section`
  form {
    margin-bottom: 2rem;
  }

  .passwordLost {
    display: inline-block;
    color: #666;
    padding: 0.5rem 0;
    line-height: 1;

    &::after {
      content: '';
      height: 2px;
      width: 100%;
      background: currentColor;
      display: block;
    }
  }
`

export const CreateNewAccountContainer = styled.div`
  margin-top: 4rem;

  h2 {
    font-family: var(--type-secondary);
    line-height: 1;
    font-size: 2rem;

    &::after {
      content: '';
      display: block;
      background: #ddd;
      height: 0.5rem;
      width: 3rem;
      border-radius: 0.2rem;
    }
  }

  p {
    margin: 2rem 0;
  }
`