import React, { FunctionComponent } from 'react'
import { IGatsbyImageData } from 'gatsby-plugin-image'
import styled from '@emotion/styled'
import ProfileImage from 'components/Main/ProfileImage'

type IntroductionProps = {
  profileImage: IGatsbyImageData
}

const IntroductionWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 768px;
  margin: 40px auto;

  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    padding: 0 20px;
  }
`

const SubTitle = styled.div`
  font-size: 18px;
  font-weight: 400;
  word-break: keep-all;

  @media (max-width: 768px) {
    font-size: 15px;
  }
`

const Title = styled.div`
  margin-top: 5px;
  font-size: 30px;
  font-weight: 700;
  word-break: keep-all;

  @media (max-width: 768px) {
    font-size: 25px;
  }
`

const Introduction: FunctionComponent<IntroductionProps> = ({ profileImage }) => {
  return (
    <IntroductionWrapper>
      <ProfileImage profileImage={profileImage} />
      <div>
        <Title>안녕하세요 개발자 Min 입니다.</Title>
        <SubTitle>개발자들 사이에서 한 번쯤 들어봤을 만한 사람이 되는 게 목표입니다.</SubTitle>
      </div>
    </IntroductionWrapper>
  )
}

export default Introduction
