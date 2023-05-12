import { createContext, ReactNode, useCallback, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { TOKEN_POST, TOKEN_VALIDATE_POST, USER_GET } from '../lib/api'

interface IUserData {
  email: string,
  id: number,
  nome: string,
  username: string,
}

interface UserContextProps {
  userData: IUserData | null,
  login: boolean,
  error: string | null,
  loading: boolean,
  handleUserLogin: (username: string, password: string) => Promise<void>,
  handleUserLogout: () => void,
}

interface UserStorageProps {
  children: ReactNode,
}

export const UserContext = createContext<UserContextProps>({} as UserContextProps)

export function UserStorage({children}: UserStorageProps) {
  const [ userData, setUserData ] = useState<IUserData | null>(null)
  const [ login, setLogin ] = useState<boolean>(false)
  const [ error, setError ] = useState<string | null>(null)
  const [ loading, setLoading ] = useState<boolean>(false)

  const navigate = useNavigate()

  const handleUserLogout = useCallback(async () => {
    setUserData(null)
    setError(null)
    setLoading(false)
    setLogin(false)
    window.localStorage.removeItem('token')
    navigate('/login')
  }, [navigate])

  async function getUser(token: string) {
    const { url, options } = USER_GET(token)

    const response = await fetch(url, options)
    const json = await response.json()
    setUserData(json)
    setLogin(true)
  }
  
  async function handleUserLogin(username: string, password: string) {
    const { url, options } = TOKEN_POST({username, password})
    try {
      setError(null)
      setLoading(true)
      const response = await fetch(url, options)
      if (!response.ok) throw new Error(`Error: ${response.statusText.length ? response.statusText : 'Usuário Inválido'}`)
      const { token } = await response.json()
      window.localStorage.setItem('token', token)
      await getUser(token)
      navigate('/conta')
    }
    catch(error) {
      setError((error as Error).message)
      setLogin(false)
    }
    finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    async function autoLogin() {
      const token = window.localStorage.getItem('token')
      if (token) {
        try {
          setError(null)
          setLoading(true)
          const { url, options } = TOKEN_VALIDATE_POST(token)
          const response = await fetch(url, options)
          if (!response.ok) throw new Error('Token Inválido')
          await getUser(token)        
        }
        catch(error) {
          handleUserLogout()
        }
        finally {
          setLoading(false)
        }    
      }
    }
    autoLogin()
  }, [handleUserLogout])

  return (
    <UserContext.Provider value={{
      userData,
      error,
      loading,
      login,
      handleUserLogin,
      handleUserLogout,
    }
    }>
      {children}
    </UserContext.Provider>
  )
}
