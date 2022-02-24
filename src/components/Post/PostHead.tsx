import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image'
import PostHeadInfo, { PostHeadInfoProps } from 'components/Post/PostHeadInfo'

type PostHeadProps = PostHeadInfoProps & {
  thumbnail: IGatsbyImageData
}

const PostHeadWrapper = styled.div`
  width: 768px;
  margin: 0px auto;

  @media (max-width: 768px) {
    width: 100%;
    margin-bottom: 40px;
  }
`

const BackgroundImage = styled(GatsbyImage)`
  z-index: -1;
  width: 100%;
  height: 400px;
  object-fit: cover;
  background: #333333;
  box-shadow: 0 0 8px #333333;

  @media (max-width: 768px) {
    height: 300px;
  }
`

const PostHead: FunctionComponent<PostHeadProps> = ({ thumbnail, title, date, categories }) => {
  return (
    <PostHeadWrapper>
      <PostHeadInfo title={title} date={date} categories={categories} />
      <BackgroundImage image={thumbnail} alt="thumbnail" />
    </PostHeadWrapper>
  )
}

export default PostHead
