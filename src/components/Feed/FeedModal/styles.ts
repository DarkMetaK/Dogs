import styled from 'styled-components'

export const FeedModalContainer = styled.section`
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0,0,0,0.4);
  display: flex;
  z-index: 1000;
  padding: 2rem calc(4rem + 15px) 2rem 4rem;

  @media screen and (max-width: 40rem) {
    padding: 2rem 2rem 2rem 2rem;
  }
`
