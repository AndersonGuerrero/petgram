import React from 'react'
import { useQuery } from 'react-apollo-hooks'

import { Loading as Spinner } from '../Loading'
import { PhotoCard } from '../PhotoCard'
import { List, Item } from '../ListOfPhotoCards/styles'
import { GET_PHOTO_QUERY } from '../../queries'

const DetailOfPhotoCardComponent = ({ photoId }) => {
  const { loading, error, data } = useQuery(GET_PHOTO_QUERY, {
    variables: { id: photoId }
  })
  if (error) return `Error: ${error}`
  return (
    <List>
      {
        loading
          ? <Spinner />
          : <Item><PhotoCard {...data.photo} /></Item>
      }
    </List>
  )
}

export const DetailOfPhotoCard = DetailOfPhotoCardComponent
