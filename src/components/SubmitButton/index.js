import React from 'react'
import { Button } from './styles'
import PropTypes from 'prop-types'

export const SubmitButton = ({ onClick, children, disabled }) => {
  return (
    <Button disabled={disabled} onClick={onClick}>{children}</Button>
  )
}

SubmitButton.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
  disabled: PropTypes.bool.isRequired
}
