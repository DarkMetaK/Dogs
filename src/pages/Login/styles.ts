import styled from 'styled-components'

import backgroundImage from '../../assets/login.jpg'

export const LoginContainer = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  min-height: 100vh;
  gap: 2rem;

  &::before {
    content: '';
    display: block;
    background: url(${backgroundImage}) no-repeat center center;
    background-size: cover;
  }

  & > div {
    max-width: 30rem;
    padding: 1rem;
  }

  @media (max-width: 40rem) {
    grid-template-columns: 1fr;

    &::before {
      display: none;
    }

    & > div {
      max-width: 100%;
    }
  }
`