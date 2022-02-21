import React, { FunctionComponent } from 'react'
import { Global, css } from '@emotion/react'

const defaultStyle = css`
  @font-face {
    font-family: 'GowunDodum-Regular';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2108@1.1/GowunDodum-Regular.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'GowunDodum-Regular';
  }

  html,
  body,
  #___gatsby {
    ::-webkit-scrollbar-thumb {
      background: #333333;
      border-radius: 10px;
      background-clip: padding-box;
      border: 2px solid transparent;
    }
  }

  a,
  a:hover {
    color: inherit;
    text-decoration: none;
    cursor: pointer;
  }

  ::-webkit-scrollbar {
    height: 12px;
    width: 12px;
  }
`

const GlobalStyle: FunctionComponent = () => {
  return <Global styles={defaultStyle} />
}

export default GlobalStyle
