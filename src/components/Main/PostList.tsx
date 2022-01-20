import React, { FunctionComponent, useMemo } from 'react'
import styled from '@emotion/styled'
import PostItem from 'components/Main/PostItem'

import { PostListItemType } from 'types/PostItem.types'

type PostListProps = {
  selectedCategory: string
  posts: PostListItemType[]
}

const PostListWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 20px;
  width: 768px;
  margin: 0 auto;
  padding: 50px 0 100px;

  @media (max-width: 768px) {
    width: 100%;
    grid-template-columns: 1fr;
    padding: 50px 20px;
  }
`

const PostList: FunctionComponent<PostListProps> = ({ selectedCategory, posts }) => {
  const postListData = useMemo(
    () =>
      posts.filter(
        ({
          node: {
            frontmatter: { categories },
          },
        }) => (selectedCategory !== 'All' ? categories.includes(selectedCategory) : true),
      ),
    [selectedCategory],
  )

  return (
    <PostListWrapper>
      {postListData.map(({ node: { id, frontmatter } }) => (
        <PostItem {...frontmatter} key={id} link="https://www.google.co.kr/" />
      ))}
    </PostListWrapper>
  )
}

export default PostList
