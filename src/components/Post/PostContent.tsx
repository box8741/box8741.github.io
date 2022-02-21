import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'
import Markdown from 'components/Post/Markdown'
import TableOfContents from 'components/Post/TableOfContents'

interface PostContentProps {
  html: string
  tableOfContents: string
}

const PostWrapper = styled.div`
  width: 768px;
  margin: 0 auto;

  @media (max-width: 768px) {
    width: 100%;
    padding: 0px 20px;
    overflow: auto;
  }
`

const PostContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 768px 250px;
  margin: 80px 0;

  @media (max-width: 768px) {
    display: block;
    margin: 40px 0;
  }
`

const PostContent: FunctionComponent<PostContentProps> = ({ html, tableOfContents: toc }) => {
  return (
    <PostWrapper>
      <PostContentWrapper>
        <Markdown html={html} />
        <TableOfContents toc={toc} />
      </PostContentWrapper>
    </PostWrapper>
  )
}

export default PostContent
