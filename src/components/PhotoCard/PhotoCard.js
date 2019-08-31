import React, { Fragment } from 'react'
import { useMutation } from 'react-apollo-hooks'
import { Link } from '@reach/router'
import PropTypes from 'prop-types'

import { Img, ImgWrapper, Article } from './styles'
import { useNearScreen } from '../../hooks'
import { LIKE_PHOTO_MUTATION } from '../../mutations'
import { FavButton } from '../FavButton'

export const PhotoCardComponent = ({ liked, id, likes = 0, src }) => {
  const [likePhoto] = useMutation(LIKE_PHOTO_MUTATION)
  const [show, element] = useNearScreen()

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
          <FavButton onClick={handleFavClick} liked={liked} likes={likes} />
        </Fragment>
      }
    </Article>
  )
}
PhotoCardComponent.propTypes = {
  liked: PropTypes.bool.isRequired,
  id: PropTypes.string.isRequired,
  likes: function(props, propName, componentName) {
    const propValue = props[propName]
    if (propValue === undefined) {
      return new Error(`${componentName}-${propName} El valor no esta definido`)
    }

    if (propValue < 0) {
      return new Error(`${componentName}-${propName} El valor no debe ser menor a cero`)
    }
  },
  src: PropTypes.string.isRequired
}

export const PhotoCard = PhotoCardComponent
