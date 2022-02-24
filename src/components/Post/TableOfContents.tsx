import React, { FunctionComponent, useMemo } from 'react'
import styled from '@emotion/styled'
import useActiveHash from 'hooks/useActiveHash'

type TOCProps = {
  toc: string
}

const TOCWrapper = styled.div`
  position: relative;
  width: 250px;
  margin-left: 60px;

  @media (max-width: 1410px) {
    display: none;
  }
`

const TOCContent = styled.div<{ activeId: string }>`
  position: sticky;
  top: 200px;
  border-left: 3px solid #aaaaaa;
  padding: 12px;

  li {
    list-style: none;
  }

  p + ul {
    margin-left: 10px;
  }

  a {
    color: #888888;
    font-size: 14px;
    transition: color 0.2s ease, font-size 0.2s ease;
  }

  a[href$='#${({ activeId }) => activeId}'] {
    color: black;
    font-size: 15px;
    font-weight: 600;
  }
`

const TableOfContents: FunctionComponent<TOCProps> = ({ toc }) => {
  const targetedIds = useMemo(() => {
    if (typeof document === 'undefined') return []
    const dummyDOM = document.createElement('html')
    dummyDOM.innerHTML = toc
    const justAnchors = dummyDOM.querySelectorAll(`a`)

    const val: string[] = []
    justAnchors.forEach(a => {
      val.push(decodeURI(a.hash.replace('#', '')))
    })

    return val
  }, [])

  const activeId = useActiveHash(targetedIds)

  return (
    <TOCWrapper>
      <TOCContent activeId={encodeURI(activeId)} dangerouslySetInnerHTML={{ __html: toc }} />
    </TOCWrapper>
  )
}

export default TableOfContents
