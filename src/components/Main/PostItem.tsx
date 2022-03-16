import React, { FunctionComponent } from 'react'
import { Link } from 'gatsby'
import styled from '@emotion/styled'
import { GatsbyImage } from 'gatsby-plugin-image'

import { PostFrontmatterType } from 'types/PostItem.types'

type PostItemProps = PostFrontmatterType & {
  selectedCategory: string
  link: string
}

const Title = styled.div`
  display: -webkit-box;
  overflow: hidden;
  margin-bottom: 3px;
  text-overflow: ellipsis;
  white-space: normal;
  overflow-wrap: break-word;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  font-size: 20px;
  font-weight: 700;
  color: var(--font);
`

const PostItemWrapper = styled(Link)`
  display: flex;
  padding: 16px;
  border-top: 1px solid var(--border);
  cursor: pointer;

  &:last-of-type {
    margin-bottom: 0;
    border-bottom: 1px solid var(--border);
  }
  &:hover ${Title} {
    text-decoration: underline;
  }
`

const ThumbnailImage = styled(GatsbyImage)`
  @media (max-width: 768px) {
    display: none;
  }
`

const PostItemContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 15px;
`

const Date = styled.div`
  font-size: 14px;
  font-weight: 400;
  opacity: 0.7;
`

const Category = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 10px;
  margin: 10px -5px;
`

const CategoryItem = styled.div<{ active: boolean }>`
  margin: 2.5px 5px;
  padding: 3px 8px;
  border-radius: 50px;
  font-size: 14px;
  font-weight: bold;
  color: var(--font-gray);
  box-shadow: ${({ active }) => (active ? 'var(--shadow-enabled)' : 'var(--shadow-disabled)')};
`

const Summary = styled.div`
  display: -webkit-box;
  overflow: hidden;
  margin-top: auto;
  text-overflow: ellipsis;
  white-space: normal;
  overflow-wrap: break-word;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  font-size: 16px;
  opacity: 0.8;
`

const PostItem: FunctionComponent<PostItemProps> = ({
  title,
  date,
  categories,
  summary,
  thumbnail: {
    childImageSharp: { gatsbyImageData },
  },
  selectedCategory,
  link,
}) => {
  return (
    <PostItemWrapper to={link}>
      <ThumbnailImage image={gatsbyImageData} alt="Post Item Image" />
      <PostItemContent>
        <Title>{title}</Title>
        <Date>{date}</Date>
        <Category>
          {categories.map(category => (
            <CategoryItem key={category} active={category === selectedCategory}>
              {category}
            </CategoryItem>
          ))}
        </Category>
        <Summary>{summary}</Summary>
      </PostItemContent>
    </PostItemWrapper>
  )
}

export default PostItem
