import React, { createRef, FunctionComponent, useEffect } from 'react'
import styled from '@emotion/styled'

const src = 'https://utteranc.es/client.js'
const repo = 'box8741/box8741.github.io'

type UtterancesAttributesType = {
  src: string
  repo: string
  'issue-term': string
  label: string
  theme: string
  crossorigin: string
  async: string
}

const UtteranceWrapper = styled.div`
  @media (max-width: 768px) {
    padding: 0 20px;
  }
`

const CommentWidget: FunctionComponent = () => {
  const element = createRef<HTMLDivElement>()

  useEffect(() => {
    if (element.current === null) return

    const prefersColorScheme = window.matchMedia('prefers-color-scheme: dark').matches ? 'dark' : 'light'
    const theme = localStorage.getItem('theme') || prefersColorScheme

    const utterances: HTMLScriptElement = document.createElement('script')

    const attributes: UtterancesAttributesType = {
      src,
      repo,
      'issue-term': 'title',
      label: 'Comment',
      theme: `github-${theme}`,
      crossorigin: 'anonymous',
      async: 'true',
    }

    Object.entries(attributes).forEach(([key, value]) => {
      utterances.setAttribute(key, value)
    })

    element.current.appendChild(utterances)
  }, [])

  return <UtteranceWrapper ref={element} />
}

export default CommentWidget
