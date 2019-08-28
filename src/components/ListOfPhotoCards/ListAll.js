import React from 'react'
import { useQuery } from 'react-apollo-hooks'

import { Loading as Spinner } from '../Loading'
import { PhotoCard } from '../PhotoCard'
import { List, Item } from './styles'
import { GET_PHOTOS_QUERY } from '../../queries'

export const ListAll = ({ categoryId = null }) => {
  const variables = {}
  if (categoryId) variables.categoryId = categoryId

  const { loading, error, data } = useQuery(GET_PHOTOS_QUERY, { variables })
  if (error) return `Error: ${error}`
  return (
    <List>
      {
        loading
          ? <Spinner />
          : data.photos.map(photo => <Item key={photo.id}><PhotoCard {...photo} /></Item>)
      }
    </List>
  )
}
