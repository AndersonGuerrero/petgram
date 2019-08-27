import React, { Fragment } from 'react'
import { Router } from '@reach/router'

import { GlobalStyles } from './styles/GlobalStyles'
import { Logo } from './components/Logo'
import { Home, Detail } from './pages'

export const App = () => {
  return (
    <Fragment>
      <GlobalStyles />
      <Logo />
      <Router>
        <Home path='/' />
        <Home path='/category/:id' />
        <Detail path='/detail/:id' />
      </Router>
    </Fragment>
  )
}
