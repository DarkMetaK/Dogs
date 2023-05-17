import { useCallback, useState } from 'react'

export function UseFetch() {
  const [data, setData] = useState<unknown>(null)
  const [error, setError] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const request = useCallback(async(url: string, options: RequestInit | undefined) => {
    let response: Response | null = null
    let json
    
    try {
      setError(null)
      setIsLoading(true)

      response = await fetch(url, options)
      json = await response.json()

      if(response.ok === false) throw new Error(json.message)
    }
    catch(error) {
      json = null
      setError((error as Error).message)
    }
    finally {
      setData(json)
      setIsLoading(false)
      // eslint-disable-next-line no-unsafe-finally
      return { response, json }
    }
  }, [])

  return {
    data,
    error,
    isLoading,
    request,
  }
}
