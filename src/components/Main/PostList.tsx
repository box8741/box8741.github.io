import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'
import PostItem from 'components/Main/PostItem'
import useInfiniteScroll, { useInfiniteScrollType } from 'hooks/useInfiniteScroll'

import { PostListItemType } from 'types/PostItem.types'

type PostListProps = {
  selectedCategory: string
  posts: PostListItemType[]
}

const PostListWrapper = styled.div`
  width: 768px;
  margin: 0 auto;

  @media (max-width: 768px) {
    width: 100%;
    padding: 0 20px;
  }
`

const PostListContent = styled.div`
  padding: 20px 0;
  margin-bottom: 60px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

const PostCount = styled.div`
  font-size: 32px;
  font-weight: 600;
  margin: 0 0 16px 12px;
`

const PostList: FunctionComponent<PostListProps> = ({ selectedCategory, posts }) => {
  const { containerRef, postList }: useInfiniteScrollType = useInfiniteScroll(selectedCategory, posts)

  return (
    <PostListWrapper>
      <PostListContent ref={containerRef}>
        <PostCount>Posts {postList.length}</PostCount>
        {postList.map(
          ({
            node: {
              id,
              fields: { slug },
              frontmatter,
            },
          }) => (
            <PostItem {...frontmatter} key={id} link={slug} />
          ),
        )}
      </PostListContent>
    </PostListWrapper>
  )
}

export default PostList
