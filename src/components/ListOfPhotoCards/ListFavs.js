import React from 'react'
import { useQuery } from 'react-apollo-hooks'

import { Loading as Spinner } from '../Loading'
import { PhotoCard } from '../PhotoCard'
import { List, Item } from './styles'
import { GET_FAVS_QUERY } from '../../queries'

export const ListFavs = () => {
  const { loading, error, data } = useQuery(GET_FAVS_QUERY)
  if (error) return `Error: ${error}`
  return (
    <List>
      {
        loading
          ? <Spinner />
          : data.favs.map(photo => <Item key={photo.id}><PhotoCard {...photo} /></Item>)
      }
    </List>
  )
}
