import React from 'react'
import { MdFavoriteBorder } from 'react-icons/md'
import { Img, Button, ImgWrapper } from './styles'

export const PhotoCard = ({ id, likes = 0, src }) => {
  return (
    <article>
      <a href={`/detail/${id}`}>
        <ImgWrapper>
          <Img src={src} />
        </ImgWrapper>
      </a>
      <Button>
        <MdFavoriteBorder size='28px' /> {likes} likes!
      </Button>
    </article>
  )
}
