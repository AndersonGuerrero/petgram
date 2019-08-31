import React, { useContext, Suspense } from 'react'
import { Router, Redirect } from '@reach/router'

import { GlobalStyles, Div } from './styles/GlobalStyles'
import { Logo } from './components/Logo'
import { Home, Detail, User, NotRegisteredUser, NotFound } from './pages'
import { NavBar } from './components/NavBar'
import { Context } from './Context'

const Favs = React.lazy(() => import('./pages/Favs'))

export const App = () => {
  const { isAuth } = useContext(Context)
  return (
    <Suspense fallback={<div />}>
      <GlobalStyles />
      <Logo />
      <Div>
        <Router>
          <NotFound default />
          { !isAuth && <NotRegisteredUser path='/login' /> }
          { !isAuth && <Redirect from='/favs' to='/login' /> }
          { !isAuth && <Redirect from='/user' to='/login' /> }
          { isAuth && <Redirect from='/login' to='/' /> }
          <Home path='/' />
          <Home path='/category/:id' />
          <Detail path='/detail/:id' />
          <User path='/user' />
          <Favs path='/favs' />
        </Router>
      </Div>
      <NavBar />
    </Suspense>
  )
}
