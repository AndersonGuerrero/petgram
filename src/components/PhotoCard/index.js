import React, { Fragment } from 'react'
import { MdFavoriteBorder, MdFavorite } from 'react-icons/md'
import { Img, Button, ImgWrapper, Article } from './styles'
import { useLocalStorage, useNearScreen } from '../../hooks'

export const PhotoCard = ({ id, likes = 0, src }) => {
  const [show, element] = useNearScreen()
  const key = `like-${id}`
  const [like, setLike] = useLocalStorage(key, false)

  const Icon = like ? MdFavorite : MdFavoriteBorder
  return (
    <Article ref={element}>
      {
        show &&
        <Fragment>
          <a href={`/detail/${id}`}>
            <ImgWrapper>
              <Img src={src} />
            </ImgWrapper>
          </a>
          <Button onClick={() => setLike(!like)}>
            <Icon size='28px' /> {likes} likes!
          </Button>
        </Fragment>
      }
    </Article>
  )
}
