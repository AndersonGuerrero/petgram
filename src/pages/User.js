import React, { useContext } from 'react'
import { Context } from '../Context'
import { SubmitButton } from '../components/SubmitButton'
import { Layout } from '../components/Layout'

export const User = () => {
  const { removeAuth } = useContext(Context)
  return (
    <Layout
      title={`Detalle de Usuario`}>
      <h2>User</h2>
      <SubmitButton onClick={removeAuth}>Cerrar Sesion</SubmitButton>
    </Layout>
  )
}
