import React, { FunctionComponent } from 'react'
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image'
import styled from '@emotion/styled'

type ProfileWidgetProps = {
  profileImage: IGatsbyImageData
}

const ProfileWidgetWrapper = styled.div`
  display: flex;
  width: 768px;
  margin: 0 auto 20px auto;

  @media (max-width: 768px) {
    width: 100%;
    flex-direction: column;
    padding: 0 20px;
  }
`

const Profile = styled(GatsbyImage)`
  width: 140px;
  height: 140px;
`

const Line = styled.span`
  height: 90px;
  width: 1px;
  background: #cccccc;
  margin: 0 24px 0 12px;

  @media (max-width: 768px) {
    display: none;
  }
`

const IntroduceWRapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const IntroduceTitle = styled.div`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 12px;
`

const IntroduceDescription = styled.div`
  font-size: 16px;
`

const IntroduceDevelop = styled.div`
  font-size: 14px;
  color: var(--font-gray);
`

const ProfileWidget: FunctionComponent<ProfileWidgetProps> = ({ profileImage }) => {
  return (
    <ProfileWidgetWrapper>
      <Profile image={profileImage} alt="Profile image" />
      <Line />
      <IntroduceWRapper>
        <IntroduceTitle>안녕하세요 개발자 Min 입니다.</IntroduceTitle>
        <IntroduceDescription>개발자들 사이에서 한 번쯤 들어봤을 만한 사람이 되는 게 목표입니다.</IntroduceDescription>
        <IntroduceDevelop>Frontend Developer</IntroduceDevelop>
      </IntroduceWRapper>
    </ProfileWidgetWrapper>
  )
}

export default ProfileWidget
