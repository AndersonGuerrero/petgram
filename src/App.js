import React, { Fragment } from 'react'
import { Router } from '@reach/router'

import { GlobalStyles, Div } from './styles/GlobalStyles'
import { Logo } from './components/Logo'
import { Home, Detail, Favs, User, NotRegisteredUser } from './pages'
import { NavBar } from './components/NavBar'
import Context from './Context'

export const App = () => {
  return (
    <Fragment>
      <GlobalStyles />
      <Logo />
      <Div>
        <Router>
          <Home path='/' />
          <Home path='/category/:id' />
          <Detail path='/detail/:id' />
        </Router>
        <Context.Consumer>
          {
            ({ isAuth }) =>
              isAuth
                ? <Router>
                  <User path='/user' />
                  <Favs path='/favs' />
                </Router>
                : <Router>
                  <NotRegisteredUser path='/favs' />
                  <NotRegisteredUser path='/user' />
                </Router>
          }
        </Context.Consumer>
      </Div>
      <NavBar />
    </Fragment>
  )
}
