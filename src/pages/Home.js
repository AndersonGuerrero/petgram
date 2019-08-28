import React, { Fragment } from 'react'
import { ListAll } from '../components/ListOfPhotoCards'
import { ListOfCategories } from '../components/ListOfCategories'

export const Home = ({ id }) => (
  <Fragment>
    <ListOfCategories />
    <ListAll categoryId={id} />
  </Fragment>
)
