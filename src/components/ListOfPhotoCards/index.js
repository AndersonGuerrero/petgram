import React from 'react'
import { PhotoCard } from '../PhotoCard'
import { photos } from '../../../api/db.json'
import { List, Item } from './styles'

export const ListOfPhotoCards = () => {
  return (
    <List>
      {
        photos.map(photo => <Item key={photo.id}><PhotoCard {...photo} /></Item>)
      }
    </List>
  )
}
