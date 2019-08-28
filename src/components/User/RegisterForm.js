import React, { Fragment } from 'react'
import { useMutation } from 'react-apollo-hooks'
import { useInputValue } from '../../hooks'
import { Form, Input, Button, Title, Error } from './styles'
import { Loading } from '../Loading'
import { REGISTER_USER_MUTATION } from '../../mutations'

export const RegisterForm = ({ activateAuth }) => {
  const [register, { error, loading }] = useMutation(REGISTER_USER_MUTATION)
  const [user, onChange] = useInputValue({ email: '', password: '', password2: '' })

  const onSubmit = (e) => {
    e.preventDefault()
    const input = { email: user.email, password: user.password }
    register({
      variables: { input }
    }).then(({ data }) => {
      activateAuth(data.signup)
    })
  }
  const errorMessage = error ? 'El usuario ya existe' : ''
  return (
    <Fragment>
      <Form disabled={loading} onSubmit={onSubmit}>
        <Title>Registro</Title>
        <Input disabled={loading} required type='email' placeholder='Email' name='email' value={user.email} onChange={onChange} />
        <Input disabled={loading} required placeholder='Password' name='password' type='password' value={user.password} onChange={onChange} />
        <Input disabled={loading} required placeholder='Repita el Password' name='password2' type='password' value={user.password2} onChange={onChange} />
        {
          loading &&
          <Loading />
        }
        <Button disabled={loading}>
          Registrar
        </Button>
      </Form>
      <Error>{errorMessage}</Error>
    </Fragment>
  )
}
