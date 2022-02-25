import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'

type MarkdownProps = {
  html: string
}

const MarkdownRenderer = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 1.8;
  font-size: 16px;
  word-break: keep-all;

  h1 {
    font-size: 30px;
    font-weight: bold;
    margin-bottom: 40px;
  }
  h2 {
    font-size: 25px;
    font-weight: bold;
    margin-bottom: 30px;
  }
  h3 {
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 20px;
  }

  * + h1 {
    margin-top: 100px;
  }
  * + h2 {
    margin-top: 80px;
  }
  * + h3 {
    margin-top: 60px;
  }

  p {
    padding: 3px 0;
  }

  blockquote {
    margin: 30px 0;
    padding: 5px 15px;
    border-left: 2px solid var(--border);
    font-weight: 800;
  }

  ol,
  ul {
    margin-left: 20px;
    padding: 30px 0;
  }

  hr {
    border: 1px solid var(--border);
    margin: 100px 0;
  }

  a {
    color: #4263eb;
    text-decoration: underline;
  }

  img {
  }
  p > span[class='gatsby-resp-image-wrapper'] {
    margin: 30px 0;
    box-shadow: var(--shadow-default);
  }

  pre[class*='language-'] {
    margin: 30px 0;
    padding: 15px;
    font-size: 15px;
    border-radius: 6px;
    box-shadow: var(--shadow-default);

    ::-webkit-scrollbar-thumb {
      background: rgba(255, 255, 255, 0.5);
      border-radius: 10px;
      background-clip: padding-box;
      border: 2px solid transparent;
    }
  }

  p:not(pre) > code[class='language-text'],
  li:not(pre) > code[class='language-text'] {
    font-size: 14px;
    background: var(--bg-gray);
    color: #e91e63;
    padding: 3px 5px;
  }

  code[class*='language-'],
  pre[class*='language-'] {
    tab-size: 2;
  }

  @media (max-width: 768px) {
    line-height: 1.6;
    font-size: 14px;

    h1 {
      font-size: 23px;
    }
    h2 {
      font-size: 20px;
    }
    h3 {
      font-size: 17px;
    }
  }
`

const Markdown: FunctionComponent<MarkdownProps> = ({ html }) => {
  return <MarkdownRenderer dangerouslySetInnerHTML={{ __html: html }} />
}

export default Markdown
