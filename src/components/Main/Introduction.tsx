import React, { FunctionComponent } from 'react'
import { IGatsbyImageData } from 'gatsby-plugin-image'
import styled from '@emotion/styled'
import ProfileImage from 'components/Main/ProfileImage'

type IntroductionProps = {
  profileImage: IGatsbyImageData
}

const IntroductionWrapper = styled.div`
  min-height: calc(100vh - 80px);
  width: 100%;
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    min-height: calc(100vh - 60px);
  }
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 768px;
  height: 400px;
  margin: 0 auto;

  @media (max-width: 768px) {
    width: 100%;
    height: 300px;
    padding: 0 20px;
  }
`

const SubTitle = styled.div`
  font-size: 20px;
  font-weight: 400;

  @media (max-width: 768px) {
    font-size: 15px;
  }
`

const Title = styled.div`
  margin-top: 5px;
  font-size: 35px;
  font-weight: 700;

  @media (max-width: 768px) {
    font-size: 25px;
  }
`

const Introduction: FunctionComponent<IntroductionProps> = ({ profileImage }) => {
  return (
    <IntroductionWrapper>
      <Wrapper>
        <ProfileImage profileImage={profileImage} />
        <div>
          <Title>안녕하세요 개발자 박민국 입니다.</Title>
          <SubTitle>개발자들 사이에서 한 번쯤 들어봤을 만한 사람이 되는 게 꿈입니다.</SubTitle>
        </div>
      </Wrapper>
    </IntroductionWrapper>
  )
}

export default Introduction
