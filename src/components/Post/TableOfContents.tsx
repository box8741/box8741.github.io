import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'

type TOCProps = {
  toc: string
}

const TOCWrapper = styled.div`
  position: relative;
  width: 250px;
  margin-left: 60px;
`

const TOCContent = styled.div`
  position: sticky;
  top: 200px;
  border-left: 2px solid #aaaaaa;
  border-radius: 10px;
  padding: 12px;

  li {
    list-style: none;
    color: #888888;
    font-size: 14px;
    margin-bottom: 6px;
    &:last-of-type {
      margin-bottom: 0;
    }
  }
`

const TableOfContents: FunctionComponent<TOCProps> = ({ toc }) => {
  return (
    <TOCWrapper>
      <TOCContent dangerouslySetInnerHTML={{ __html: toc }} />
    </TOCWrapper>
  )
}

export default TableOfContents
