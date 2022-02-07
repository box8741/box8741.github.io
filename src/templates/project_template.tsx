import React, { FunctionComponent } from 'react'
import { graphql } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'

import { ProjectListItemType } from 'types/ProjectItem.types'

type ProjectTemplateProps = {
  data: {
    projectMetaData: ProjectListItemType['node']
  }
}

const ProjectTemplate: FunctionComponent<ProjectTemplateProps> = ({
  data: {
    projectMetaData: {
      title,
      content,
      period,
      description,
      thumbnail: { gatsbyImageData },
    },
  },
}) => {
  return (
    <div>
      <div>{title}</div>
      <div>{content}</div>
      <div>{period}</div>
      <div>{description}</div>
      <GatsbyImage image={gatsbyImageData} alt="thumbnail" />
    </div>
  )
}

export default ProjectTemplate

export const getTempProjectData = graphql`
  query getTempProjectData($projectId: String) {
    projectMetaData(id: { eq: $projectId }) {
      title
      content
      period
      description
      thumbnail {
        gatsbyImageData(width: 768, height: 400, transformOptions: { fit: OUTSIDE })
      }
    }
  }
`
