import styled from 'styled-components'

export const UserHeaderContainer = styled.header`
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
  margin-bottom: 2rem;
  margin-top: 1rem;
  position: relative;

  .menuButton{
    background-color: #eee;
    border-radius: 0.2rem;
    height: 40px;
    width: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid transparent;
    transition: 0.1s;
    cursor: pointer;

    &::after {
      content: '';
      display: block;
      width: 1.2rem;
      height: 2px;
      background-color: currentColor;
      border-radius: 2px;
      box-shadow: 0 6px currentColor, 0 -6px currentColor;
      transition: 0.2s;
    }

    &:focus, &:hover {
      outline: none;
      background-color: white;
      box-shadow: 0 0 0 3px #fea;
      border-color: #fb1;
      color: #fb1;
    }

    &.active {
      &::after {
        transform: rotate(90deg);
        width: 4px;
        height: 4px;
        box-shadow: 0 8px currentColor, 0 -8px currentColor
      }
    }
  }
`

export const UserHeaderNav = styled.nav`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;

  a, button {
    background-color: #eee;
    border-radius: 0.2rem;
    height: 40px;
    width: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid transparent;
    transition: 0.1s;
    cursor: pointer;

    &:hover, &:focus {
      background-color: white;
      box-shadow: 0 0 0 3px #eee;
      border-color: #333;
      outline: none;
    }

    &.active {
      background-color: white;
      box-shadow: 0 0 0 3px #fea;
      border-color: #fb1;

      svg > * {
        fill: #fb1;
      }
    }
  }

  &.mobile {
    display: block;
    position: absolute;
    top: 70px;
    right: 0px;
    padding: 0 1rem;
    background-color: white;
    box-shadow: 0 1px 2px rgba(0,0,0,.2);
    border-radius: 0.2rem;
    transform: translateX(-10px);
    opacity: 0;
    pointer-events: none;

    a, button {
      all: unset;
      display: flex;
      gap: 0.5rem;
      align-items: center;
      width: 100%;
      border-bottom: 1px solid #eee;
      padding: 0.5rem 0;
      cursor: pointer;

      &:hover {
        svg > * {
          fill: #fb1;
        }
      }
    }

    button {
      border-bottom: none;
    }

    &.active {
      transition: 0.3s;
      transform: initial;
      opacity: 1;
      z-index: 100;
      pointer-events: initial;
    }
  }
`