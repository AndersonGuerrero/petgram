import React from 'react'
import ReactLoading from 'react-loading'
import { Div } from './style'

export const Loading = ({ type = 'spin', color = '#cccccc', height = '10%', width = '10%' }) => (
  <Div>
    <ReactLoading type={type} color={color} height={height} width={width} />
  </Div>
)
