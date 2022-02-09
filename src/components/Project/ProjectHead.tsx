import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image'

type ProjectHeadProps = {
  gatsbyImageData: IGatsbyImageData
}

const ProjectHeadWrapper = styled.div`
  width: 768px;
  margin: 16px auto 24px auto;

  @media (max-width: 768px) {
    width: 100%;
    padding: 0 20px;
  }
`

const Thumbnail = styled(GatsbyImage)`
  border-radius: 16px;
  box-shadow: 2px 2px 12px #888888;

  @media (max-width: 768px) {
    border-radius: 12px;
  }
`

const ProjectHead: FunctionComponent<ProjectHeadProps> = ({ gatsbyImageData }) => {
  return (
    <ProjectHeadWrapper>
      <Thumbnail image={gatsbyImageData} alt="thumbnail" />
    </ProjectHeadWrapper>
  )
}

export default ProjectHead
