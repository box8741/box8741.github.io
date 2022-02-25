import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'
import { Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'

import { PostFrontmatterType } from 'types/PostItem.types'

type PreviewPostItemProps = PostFrontmatterType & {
  link: string
}

const PreviewPostItemWrapper = styled(Link)`
  display: grid;
  grid-template-columns: 80px 1fr;
  grid-gap: 12px;
  margin-bottom: 16px;
  padding: 16px;
  border-radius: 12px;
  background: var(--bg);
  box-shadow: 0 0 8px #bbbbbb;

  &:last-of-type {
    margin-bottom: 0;
  }
  &:hover {
    opacity: 0.7;
  }
`

const Thumbnail = styled(GatsbyImage)`
  width: 65px;
  height: 65px;
`

const PostItemContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const Title = styled.div`
  display: -webkit-box;
  font-size: 22px;
  font-weight: bold;
  margin-bottom: 8px;
  overflow: hidden;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;

  @media (max-width: 768px) {
    font-size: 18px;
  }
`

const Category = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const CategoryItem = styled.div`
  font-weight: bold;
  font-size: 14px;
  color: var(--font-gray);
  padding: 2px 6px;
  border-radius: 50px;
  margin-right: 12px;
  box-shadow: var(--shadow-disabled);
`

const PreviewPostItem: FunctionComponent<PreviewPostItemProps> = ({
  title,
  categories,
  thumbnail: {
    childImageSharp: { gatsbyImageData },
  },
  link,
}) => {
  return (
    <PreviewPostItemWrapper to={link}>
      <Thumbnail image={gatsbyImageData} alt="thumbnail image" />
      <PostItemContent>
        <Title>{title}</Title>
        <Category>
          {categories.map(category => (
            <CategoryItem key={category}>{category}</CategoryItem>
          ))}
        </Category>
      </PostItemContent>
    </PreviewPostItemWrapper>
  )
}

export default PreviewPostItem
