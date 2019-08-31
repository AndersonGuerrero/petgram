import React, { Fragment } from 'react'
import { Helmet } from 'react-helmet'

export const Layout = ({ children, title, description }) => {
  return (
    <Fragment>
      <Helmet>
        {title && <title>{title} - PetGram</title>}
        { description && <meta name='description' content={description} /> }
      </Helmet>
      {children}
    </Fragment>
  )
}
