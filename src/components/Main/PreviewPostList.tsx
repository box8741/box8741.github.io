import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'
import { Link } from 'gatsby'
import PreviewPostItem from 'components/Main/PreviewPostItem'

import { PostListItemType } from 'types/PostItem.types'

type PreviewPostListProps = {
  posts: PostListItemType[]
}

const PreviewPostListWrapper = styled.div`
  background: var(--bg-gray);
  padding: 40px 0;
`

const PreviewPostListContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 768px;
  margin: 0 auto;

  @media (max-width: 768px) {
    width: 100%;
    padding: 0 20px;
  }
`

const Blog = styled(Link)`
  font-size: 40px;
  font-weight: bold;
  text-align: center;
  margin: 30px 0 60px 0;
  color: var(--font-gray);

  &:hover {
    color: var(--font-gray);
  }
`

const PreviewTitle = styled.div`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 16px;
`

const PreviewPostList: FunctionComponent<PreviewPostListProps> = ({ posts }) => {
  return (
    <PreviewPostListWrapper>
      <PreviewPostListContent>
        <Blog to="/blog">Blog</Blog>
        <PreviewTitle>🤔 Preview Posts</PreviewTitle>
        {posts.map(
          ({
            node: {
              id,
              fields: { slug },
              frontmatter,
            },
          }) => (
            <PreviewPostItem {...frontmatter} key={id} link={slug} />
          ),
        )}
      </PreviewPostListContent>
    </PreviewPostListWrapper>
  )
}

export default PreviewPostList
