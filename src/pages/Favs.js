import React from 'react'
import { ListFavs } from '../components/ListOfPhotoCards'
import { Layout } from '../components/Layout'

export default () => {
  return (
    <Layout
      title={'Tus Favoritos'}
      description={'Aqui puedes encontrar tus fotos de mascotas favoritas'}
    >
      <ListFavs />
    </Layout>
  )
}
