import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image'

type ProjectHeadProps = {
  gatsbyImageData: IGatsbyImageData
}

const ProjectHeadWrapper = styled(GatsbyImage)`
  width: 768px;
  margin: 16px auto 24px auto;
  border-radius: 16px;
  box-shadow: 2px 2px 12px #888888;
`

const ProjectHead: FunctionComponent<ProjectHeadProps> = ({ gatsbyImageData }) => {
  return <ProjectHeadWrapper image={gatsbyImageData} alt="thumbnail"></ProjectHeadWrapper>
}

export default ProjectHead
