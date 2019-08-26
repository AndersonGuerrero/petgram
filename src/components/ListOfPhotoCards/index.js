import React from 'react'
import { graphql } from 'react-apollo'
import { gql } from 'apollo-boost'
import { Loading as Spinner } from '../Loading'

import { PhotoCard } from '../PhotoCard'
import { photos } from '../../../api/db.json'
import { List, Item } from './styles'

const widthPhotos = graphql(gql`
  query getPhotos {
    photos {
      id
      categoryId
      src
      likes
      liked
    userId
  }
}`
)

const ListOfPhotoCardsComponent = ({ data }) => {
  console.log(data)
  const { loading, photos } = data
  return (
    <List>
      {
        loading
        ? <Spinner />
        :photos.map(photo => <Item key={photo.id}><PhotoCard {...photo} /></Item>)
      }
    </List>
  )
}

export const ListOfPhotoCards = widthPhotos(ListOfPhotoCardsComponent)
