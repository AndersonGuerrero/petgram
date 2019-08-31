import React from 'react'
import { ListAll } from '../components/ListOfPhotoCards'
import { ListOfCategories } from '../components/ListOfCategories'
import { Layout } from '../components/Layout'

const HomePage = ({ id }) => (
  <Layout
    title={`Tu app de fotos de mascotas`}
    description={'Con PetGram puedes encontrar fotos de animales domesticos'}>
    <ListOfCategories />
    <ListAll categoryId={id} />
  </Layout>
)

export const Home = React.memo(HomePage, (prevProps, props) => {
  return prevProps.id === props.id
})
