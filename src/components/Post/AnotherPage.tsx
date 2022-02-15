import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'
import { Link } from 'gatsby'

type AnotherPageProps = {
  pageContext: {
    prev: PageContextItemType
    next: PageContextItemType
  }
}

export type PageContextItemType = {
  fields: { slug: string }
  frontmatter: { title: string }
}

const AnotherPageWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 40px;
  width: 768px;
  margin: 0 auto 36px auto;
`

const PostItemWrapper = styled(Link)`
  border: 1px solid #cccccc;
  border-radius: 6px;
  padding: 8px;
  cursor: pointer;
  transition: box-shadow 0.2s ease;

  &:hover {
    box-shadow: 4px 4px 8px #cccccc;
  }
`

const PostText = styled.div`
  font-size: 12px;
`

const PostTitle = styled.div`
  display: -webkit-box;
  font-size: 14px;
  font-weight: bold;
  overflow: hidden;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
`

const AnotherPage: FunctionComponent<AnotherPageProps> = ({ pageContext: { prev, next } }) => {
  return (
    <AnotherPageWrapper>
      {prev ? (
        <PostItemWrapper to={prev.fields.slug}>
          <PostText>이전 포스트</PostText>
          <PostTitle>{prev.frontmatter.title}</PostTitle>
        </PostItemWrapper>
      ) : (
        <div />
      )}
      {next ? (
        <PostItemWrapper to={next.fields.slug}>
          <PostText>다음 포스트</PostText>
          <PostTitle>{next.frontmatter.title}</PostTitle>
        </PostItemWrapper>
      ) : (
        <div />
      )}
    </AnotherPageWrapper>
  )
}

export default AnotherPage
