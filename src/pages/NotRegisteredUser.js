import React, { Fragment, useContext } from 'react'
import { Context } from '../Context'
import { RegisterForm, LoginForm } from '../components/User'

export const NotRegisteredUser = () => {
  const { activateAuth } = useContext(Context)
  return (
    <Fragment>
      <RegisterForm activateAuth={activateAuth} />
      <LoginForm activateAuth={activateAuth} />
    </Fragment>
  )
}
