import React, { Fragment } from 'react'
import { ListOfPhotoCards } from '../components/ListOfPhotoCards'
import { ListOfCategories } from '../components/ListOfCategories'

export const Home = ({ id }) => (
  <Fragment>
    <ListOfCategories />
    <ListOfPhotoCards categoryId={id} />
  </Fragment>
)
