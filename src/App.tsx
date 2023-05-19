import { BrowserRouter } from 'react-router-dom'

import { GlobalStyle } from './styles/global'
import { Router } from './Router'
import { UserStorage } from './context/UserContext'

function App() {
  return (
    <>
    <GlobalStyle />
    <BrowserRouter>
      <UserStorage>
        <Router />  
      </UserStorage> 
    </BrowserRouter>    
    </>
  )
}

export default App
