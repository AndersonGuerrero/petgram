import styled, { css } from 'styled-components'
import { fadeIn } from '../../styles/animations'

export const List = styled.ul`
  display: flex;
  overflow: hidden;
  width: 100%;
  padding: 0px;
  ${ props => props.fixed && css`
    {
      ${fadeIn({ time: '1s' })}
      background: #fff;
      border-radius: 60px;
      box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
      left: 0;
      margin: 0 auto;
      max-width: 370px;
      padding: 5px;
      position: fixed;
      right: 0;
      top: -20px;
      transform: scale(.5);
      z-index: 1;
    }
  `}
`
export const Item = styled.li`
  padding: 0 7.4px;
`
