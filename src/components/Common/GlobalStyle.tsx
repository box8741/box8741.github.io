import React, { FunctionComponent } from 'react'
import { Global, css } from '@emotion/react'

const defaultStyle = css`
  @font-face {
    font-family: 'GowunDodum-Regular';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2108@1.1/GowunDodum-Regular.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }

  ::-webkit-scrollbar {
    height: 12px;
    width: 12px;
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
  }

  body {
    &.light {
      --bg: #f2f2f2;
      --bg-gray: #e2e2e2;
      --font: #001f3f;
      --font-gray: #a2a2a2;
      --border: #cccccc;
      --shadow-default: 0 0 8px #bbbbbb;
      --shadow-hover: 1px 1px 2px #cecece, -1px -1px 2px #ffffff;
      --shadow-disabled: 3px 3px 4px #cecece, -3px -3px 4px #ffffff;
      --shadow-enabled: inset 3px 3px 4px #cecece, inset -3px -3px 4px #ffffff;

      ::-webkit-scrollbar-thumb {
        background: #2f3135;
        border-radius: 10px;
        background-clip: padding-box;
        border: 2px solid transparent;
      }
      ::-webkit-scrollbar {
        background: #f2f2f2;
        height: 12px;
        width: 12px;
      }
    }

    &.dark {
      --bg: #2f3135;
      --bg-gray: #3b3d42;
      --font: #ebebeb;
      --font-gray: #a2a2a2;
      --border: #484848;
      --shadow-default: 0 0 8px #121212;
      --shadow-hover: 1px 1px 2px #282a2d, -1px -1px 2px #36383d;
      --shadow-disabled: 3px 3px 4px #282a2d, -3px -3px 4px #36383d;
      --shadow-enabled: inset 3px 3px 4px #282a2d, inset -3px -3px 4px #36383d;

      ::-webkit-scrollbar-thumb {
        background: #f2f2f2;
        border-radius: 10px;
        background-clip: padding-box;
        border: 2px solid transparent;
      }
      ::-webkit-scrollbar {
        background: #2f3135;
        height: 12px;
        width: 12px;
      }
    }
  }

  a,
  a:hover {
    color: inherit;
    text-decoration: none;
    cursor: pointer;
  }
`

const GlobalStyle: FunctionComponent = () => {
  return <Global styles={defaultStyle} />
}

export default GlobalStyle
