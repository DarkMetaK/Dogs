import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    --type-primary: Helvetica, Arial, sans-serif;
    --type-secondary: 'Spectral', georgia;

    color: #333;
    font-family: var(--type-primary);
    padding-top: 4rem;
  }

  ul, li {
    list-style: none;
  }

  img {
    display: block;
    max-width: 100%;
  }

  button, input {
    display: block;
    font-size: 1rem;
    font-family: var(--type-primary);
    color: #333;
  }

  a {
    text-decoration: none;
    color: #333;
  }

  .container {
    max-width: 50rem;
    padding: 0 1rem;
    margin: 0 auto;
  }

  .animeLeft {
    opacity: 0;
    transform: translateX(-20px);
    animation: animeLeft 0.3s forwards;
  }

  @keyframes animeLeft {
    to {
      opacity: 1;
      transform: initial;
    }
  }
`

export const Title = styled.h1`
  font-family: var(--type-secondary);
  line-height: 1;
  font-size: 3rem;
  margin: 1rem 0;
  position: relative;
  z-index: 1;

  &::after {
    content: '';
    display: block;
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 0.2rem;
    background: #fb1;
    position: absolute;
    bottom: 5px;
    left: -5px;
    z-index: -1;
  }
`