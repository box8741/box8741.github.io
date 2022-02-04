import React, { FunctionComponent } from 'react'
import { graphql } from 'gatsby'

import { ProjectListItemType } from 'types/ProjectItem.types'

type ProjectTemplateProps = {
  data: {
    projectMetaData: ProjectListItemType['node']
  }
}

const ProjectTemplate: FunctionComponent<ProjectTemplateProps> = ({
  data: {
    projectMetaData: { title, content, period },
  },
}) => {
  return (
    <div>
      <div>{title}</div>
      <div>{content}</div>
      <div>{period}</div>
    </div>
  )
}

export default ProjectTemplate

export const getTempProjectData = graphql`
  query getTempProjectData($projectId: String) {
    projectMetaData(id: { eq: $projectId }) {
      title
      thumbnail
      content
      period
      description
    }
  }
`
