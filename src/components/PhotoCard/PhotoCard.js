import React, { Fragment } from 'react'
import { useMutation } from 'react-apollo-hooks'
import { Link } from '@reach/router'

import { MdFavoriteBorder, MdFavorite } from 'react-icons/md'
import { Img, ImgWrapper, Article, Button } from './styles'
import { useNearScreen } from '../../hooks'
import { LIKE_PHOTO_MUTATION } from '../../mutations'

export const PhotoCardComponent = ({ liked, id, likes = 0, src }) => {
  const [likePhoto] = useMutation(LIKE_PHOTO_MUTATION)
  const [show, element] = useNearScreen()
  const Icon = liked ? MdFavorite : MdFavoriteBorder

  const handleFavClick = (like) => {
    const input = { id }
    likePhoto({
      variables: { input }
    })
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
