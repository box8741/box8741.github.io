import React, { createRef, FunctionComponent, useEffect } from 'react'
import styled from '@emotion/styled'

const src = 'https://utteranc.es'
const repo = 'box8741/box8741.github.io'
const utterancesSelector = 'iframe.utterances-frame'

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
  const containerRef = createRef<HTMLDivElement>()

  useEffect(() => {
    if (containerRef.current === null) return

    const prefersColorScheme = window.matchMedia('prefers-color-scheme: dark').matches ? 'dark' : 'light'
    const theme = localStorage.getItem('theme') || prefersColorScheme

    const utterances: HTMLScriptElement = document.createElement('script')

    const attributes: UtterancesAttributesType = {
      src: `${src}/client.js`,
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
    containerRef.current.appendChild(utterances)

    const changeUtterances = (theme: string) => {
      const utterances = document.querySelector<HTMLIFrameElement>(utterancesSelector)
      if (utterances === null || utterances.contentWindow === null) return
      utterances.contentWindow.postMessage(
        {
          type: 'set-theme',
          theme: `github-${theme}`,
        },
        src,
      )
    }

    const observer = new MutationObserver(([mutation]) => {
      const { className } = mutation.target as Element
      changeUtterances(className)
    })

    observer.observe(window.document.body, {
      childList: false,
      subtree: false,
      attributes: true,
      attributeFilter: ['class'],
      characterData: false,
      attributeOldValue: false,
      characterDataOldValue: false,
    })

    return () => observer.disconnect()
  }, [])

  return <UtteranceWrapper ref={containerRef} />
}

export default CommentWidget
