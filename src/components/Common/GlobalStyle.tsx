import React, { FunctionComponent } from 'react'
import { Global, css } from '@emotion/react'

const defaultStyle = css`
  :root {
    --bg: #f2f2f2;
    --bg-gray: #e2e2e2;
    --font: #001f3f;
    --font-gray: #a2a2a2;
    --shadow-hover: 1px 1px 2px #cecece, -1px -1px 2px #ffffff;
    --shadow-disabled: 3px 3px 4px #cecece, -3px -3px 4px #ffffff;
    --shadow-enabled: inset 3px 3px 4px #cecece, inset -3px -3px 4px #ffffff;
    --shadow-gray-hover: 1px 1px 2px #c0c0c0, -1px -1px 2px #ffffff;
    --shadow-gray-disabled: 3px 3px 4px #c0c0c0, -3px -3px 4px #ffffff;
  }

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
    background: var(--bg);
    color: var(--font);

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
