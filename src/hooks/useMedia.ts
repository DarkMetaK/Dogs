import { useState, useEffect } from 'react'

export function useMedia(media: string) {
  const [ mediaMatchSize, setMediaMatchSize ] = useState<boolean>(false)

  useEffect(() => {
    function changeMatch() {
      const { matches } = window.matchMedia(media)
      setMediaMatchSize(matches)      
    }
    changeMatch()

    window.addEventListener('resize', changeMatch)

    return () => {
      window.removeEventListener('resize', changeMatch)
    }
  }, [media])

  return {
    mediaMatchSize
  }
}
