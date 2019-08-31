import React from 'react'
import { MdFavoriteBorder, MdFavorite } from 'react-icons/md'
import PropTypes from 'prop-types'
import { Button } from './styles'

export const FavButton = ({ onClick, liked, likes = 0 }) => {
  const Icon = liked ? MdFavorite : MdFavoriteBorder

  return (
    <Button onClick={() => onClick(!liked)}>
      <Icon size='28px' /> {likes} likes!
    </Button>
  )
}

FavButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  liked: PropTypes.bool.isRequired,
  likes: PropTypes.number.isRequired
}
