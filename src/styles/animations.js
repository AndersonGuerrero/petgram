import { css, keyframes } from 'styled-components'

export const fadeIn = ({ type = 'ease', time = '1s' } = {}) => (
  css`animation: ${time} ${fadeInKeyFrames} ${type};`
)

const fadeInKeyFrames = keyframes`
  from {
    filter: blur(5px);
    opacity: 0;
  }

  to {
    filter: blur(0);
    opacity: 1;
  }
`
