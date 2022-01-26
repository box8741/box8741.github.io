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
  padding: 50px 0;
  border-top: 2px solid black;
  border-bottom: 2px solid black;
  margin-bottom: 80px;

  @media (max-width: 768px) {
    width: 100%;
    grid-template-columns: 1fr;
    padding: 50px 20px;
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
    <PostListWrapper ref={containerRef}>
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
    </PostListWrapper>
  )
}

export default PostList
