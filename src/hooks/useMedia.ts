import { useState, useEffect } from 'react'

export function useMedia(media: string) {
  const [ mediaMatchSize, setMediaMatchSize ] = useState<boolean>(false)

  useEffect(() => {
    function changeMatch() {
      const { matches } = window.matchMedia(media)
      setMediaMatchSize(matches)      
    }

    window.addEventListener('resize', changeMatch)

    return () => {
      window.removeEventListener('resize', changeMatch)
    }
  }, [media])

  return {
    mediaMatchSize
  }
}
