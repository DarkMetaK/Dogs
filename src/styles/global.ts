import { createGlobalStyle } from 'styled-components'

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
  }

  .container {
    max-width: 50rem;
    padding: 0 1rem;
    margin: 0 auto;
  }
`