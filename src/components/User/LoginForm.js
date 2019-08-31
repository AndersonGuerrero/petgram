import React, { Fragment } from 'react'
import { useMutation } from 'react-apollo-hooks'
import { useInputValue } from '../../hooks'
import { Form, Input, Title, Error } from './styles'
import { SubmitButton } from '../SubmitButton'
import { Loading } from '../Loading'
import { LOGIN_USER_MUTATION } from '../../mutations'

export const LoginForm = ({ activateAuth }) => {
  const [register, { error, loading }] = useMutation(LOGIN_USER_MUTATION)
  const [user, onChange] = useInputValue({ email: '', password: '', password2: '' })

  const onSubmit = (e) => {
    e.preventDefault()
    const input = { email: user.email, password: user.password }
    register({
      variables: { input }
    }).then(({ data }) => {
      activateAuth(data.login)
    })
  }
  const errorMessage = error ? 'Usuario o Password Incorrecto' : ''
  return (
    <Fragment>
      <Form disabled={loading} onSubmit={onSubmit}>
        <Title>Inicio de Sesion</Title>
        <Input disabled={loading} required type='email' placeholder='Email' name='email' value={user.email} onChange={onChange} />
        <Input disabled={loading} required placeholder='Password' name='password' type='password' value={user.password} onChange={onChange} />
        {
          loading &&
          <Loading />
        }
        <SubmitButton disabled={loading}>
          Login
        </SubmitButton>
      </Form>
      <Error>{errorMessage}</Error>
    </Fragment>
  )
}
