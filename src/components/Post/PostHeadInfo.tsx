import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'

export type PostHeadInfoProps = {
  title: string
  date: string
  categories: string[]
}

const PostHeadInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 768px;
  height: 100%;
  margin: 0 auto;
  padding: 60px 0;

  @media (max-width: 768px) {
    width: 100%;
    padding: 40px 20px;
  }
`

const Title = styled.div`
  display: -webkit-box;
  text-align: center;
  word-break: keep-all;
  overflow: hidden;
  overflow-wrap: break-word;
  margin-top: auto;
  text-overflow: ellipsis;
  white-space: normal;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  font-size: 40px;
  font-weight: 800;

  @media (max-width: 768px) {
    font-size: 30px;
  }
`

const HorizonLine = styled.div`
  height: 1px;
  background: var(--border);
  width: 100px;
  margin: 20px auto;
`

const PostData = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    font-size: 15px;
    font-weight: 400px;
  }
`

const Category = styled.div`
  font-size: 18px;
  font-weight: bold;
`

const Date = styled.div`
  font-size: 16px;
  color: var(--font-gray);
`

const PostHeadInfo: FunctionComponent<PostHeadInfoProps> = ({ title, date, categories }) => {
  return (
    <PostHeadInfoWrapper>
      <Title>{title}</Title>
      <HorizonLine />
      <PostData>
        <Category>{categories.join(' / ')}</Category>
        <Date>{date}</Date>
      </PostData>
    </PostHeadInfoWrapper>
  )
}

export default PostHeadInfo
