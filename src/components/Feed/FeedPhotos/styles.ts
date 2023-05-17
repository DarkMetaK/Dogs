import styled from 'styled-components'

import viewsIcon from '../../../assets/visualizacao.svg'

export const FeedPhotosContainer = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  margin-bottom: 1rem;
  justify-items: center;

  @media screen and (max-width: 40rem){
    grid-template-columns: repeat(2, 1fr);
  }
`

export const PhotoItemContainer = styled.li`
  &:nth-child(2) {
    grid-column: 2 / 4;
    grid-row: span 2;

    @media screen and (max-width: 40rem) {
      grid-column: initial;
      grid-row: initial;
    }
  }

  display: grid;
  border-radius: 0.2rem;
  overflow: hidden;
  cursor: pointer;

  img {
    grid-area: 1 / 1;
  }

  span {
    grid-area: 1 / 1;
    background-color: rgba(0,0,0,0.3);
    color: white;
    font-size: 1rem;
    text-align: center;
    align-items: center;
    justify-content: center;
    gap: 0.25rem;
    display: none;

    &::before {
      content: '';
      width: 16px;
      height: 10px;
      display: inline-block;
      background: url(${viewsIcon}) no-repeat;
    }
  }

  &:hover {
    span {
      display: flex;
    }
  }
`