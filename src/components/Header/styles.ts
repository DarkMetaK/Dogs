import styled from 'styled-components'

import userAccountSvg from '../../assets/usuario.svg'

export const HeaderContainer = styled.header`
  width: 100%;
  background: white;
  box-shadow: 0px 1px 1px rgba(0,0,0,0.1);
  
  position: fixed;
  top: 0;
  z-index: 100;

  & > nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 4rem;

    .logo {
      padding: 0.5rem 0;
    }

    .login {
      color: #333;
      display: flex;
      align-items: center;
    }

    .login::after {
      content: '';
      display: inline-block;
      width: 14px;
      height: 17px;
      background: url(${userAccountSvg}) no-repeat center center;
      margin-left: 0.5rem;
      
      position: relative;
      top: -1px;
    }
  }
`
