import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image'

type ProfileImageProps = {
  profileImage: IGatsbyImageData
}

const ProfileImageWrapper = styled(GatsbyImage)`
  width: 200px;
  height: 200px;
  /* border-radius: 50%; */
  margin-right: 32px;

  @media (max-width: 768px) {
    width: 160px;
    height: 160px;
  }
`

const ProfileImage: FunctionComponent<ProfileImageProps> = ({ profileImage }) => {
  return <ProfileImageWrapper image={profileImage} alt="Profile Image" />
}

export default ProfileImage
