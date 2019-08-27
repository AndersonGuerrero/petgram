import React, { Fragment } from 'react'
import { useMutation } from 'react-apollo-hooks'
import { Link } from '@reach/router'

import { MdFavoriteBorder, MdFavorite } from 'react-icons/md'
import { Img, ImgWrapper, Article, Button } from './styles'
import { useLocalStorage, useNearScreen } from '../../hooks'
import { LIKE_PHOTOS_MUTATION } from '../../mutations'

export const PhotoCardComponent = ({ id, likes = 0, src }) => {
  const [likePhoto] = useMutation(LIKE_PHOTOS_MUTATION)
  const [show, element] = useNearScreen()
  const key = `like-${id}`
  const [liked, setLiked] = useLocalStorage(key, false)
  const Icon = liked ? MdFavorite : MdFavoriteBorder

  const handleFavClick = (like) => {
    if (like) {
      setLiked(like)
      const input = { id }
      likePhoto({
        variables: { input }
      })
    }
  }

  return (
    <Article ref={element}>
      {
        show &&
        <Fragment>
          <Link to={`/detail/${id}`}>
            <ImgWrapper>
              <Img src={src} />
            </ImgWrapper>
          </Link>
          <Button onClick={() => handleFavClick(!liked)}>
            <Icon size='28px' /> {likes} likes!
          </Button>
        </Fragment>
      }
    </Article>
  )
}
export const PhotoCard = PhotoCardComponent
