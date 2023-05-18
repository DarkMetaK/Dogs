import { SyntheticEvent, useState } from 'react'
import styled from 'styled-components'

const ImageSkeletonContainer = styled.div`
  display: grid;

  div {
    grid-area: 1 / 1;
    height: 100%;
    background-image: linear-gradient(90deg, #eee 0px, #fff 50%, #eee 100%);
    background-color: #eee;
    background-size: 200%;
    animation: skeleton 1.5s infinite linear;
  }

  img {
    grid-area: 1/1;
    display: block;
    max-width: 100%;
    width: 100%;
    height: 100%;
    object-fit: cover;

    opacity: 0;
    transition: 0.2s;
  }

  @keyframes skeleton {
    from {
      background-position: 0px;
    }
    to {
      background-position: 200%;
    }
  }
`

interface ImageSkeletonProps {
  src: string,
  alt: string,
}

export function ImageSkeleton({ src, alt }: ImageSkeletonProps) {
  const [ skeleton, setSkeleton ] = useState(true)

  function handleImageIsLoaded({ currentTarget }: SyntheticEvent<HTMLImageElement, Event>) {
    setSkeleton(false)
    currentTarget.style.opacity = "1"
  }

  return (
    <ImageSkeletonContainer>
      {skeleton && <div />}
      <img
        src={src}
        alt={alt}
        onLoad={handleImageIsLoaded}
      />
    </ImageSkeletonContainer>
  )
}
