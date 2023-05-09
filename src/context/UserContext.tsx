import { createContext, ReactNode, useState } from 'react'

import { TOKEN_POST, USER_GET } from '../lib/api'

interface IUserData {
  email: string,
  id: number,
  nome: string,
  username: string,
}

interface UserContextProps {
  userData: IUserData | null,
  handleUserLogin: (username: string, password: string) => Promise<void>
}

interface UserStorageProps {
  children: ReactNode,
}

export const UserContext = createContext<UserContextProps>({} as UserContextProps)

export function UserStorage({children}: UserStorageProps) {
  const [ userData, setUserData ] = useState<IUserData | null>(null)
  const [ login, setLogin ] = useState(false)
  const [ error, setError ] = useState(null)
  const [ loading, setLoading ] = useState(false)

  async function getUser(token: string) {
    const { url, options } = USER_GET(token)

    const response = await fetch(url, options)
    const json = await response.json()
    setUserData(json)
    setLogin(true)
    console.log(json)
  }
  
  async function handleUserLogin(username: string, password: string) {
    const { url, options } = TOKEN_POST({username, password})

    const response = await fetch(url, options)
    const { token } = await response.json()
    window.localStorage.setItem('token', token)
    getUser(token)
  }

  return (
    <UserContext.Provider value={{
      userData,
      handleUserLogin      
    }
    }>
      {children}
    </UserContext.Provider>
  )
}
