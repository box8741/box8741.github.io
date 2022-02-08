import React, { FunctionComponent } from 'react'
import { graphql, PageProps } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import Layout from 'components/Common/Layout'
import ProjectHead from 'components/Project/ProjectHead'
import ProjectInfo from 'components/Project/ProjectInfo'

import { ProjectListItemType } from 'types/ProjectItem.types'

type ProjectTemplateProps = PageProps & {
  data: {
    projectMetaData: ProjectListItemType['node']
  }
}

const ProjectTemplate: FunctionComponent<ProjectTemplateProps> = ({
  location: { href },
  data: {
    projectMetaData: {
      title,
      skill,
      content,
      period,
      description,
      thumbnail: { gatsbyImageData },
      extraImage,
    },
  },
}) => {
  return (
    <Layout title={title} description={description} image={gatsbyImageData.images.fallback?.src} url={href}>
      <ProjectHead gatsbyImageData={gatsbyImageData} />
      {/* <div>{skill[0]}</div> */}
      <ProjectInfo title={title} period={period} description={description} content={content} />
      {/* <GatsbyImage image={extraImage[0].gatsbyImageData} alt="dwqdqdwq" /> */}
    </Layout>
  )
}

export default ProjectTemplate

export const getTempProjectData = graphql`
  query getTempProjectData($projectId: String) {
    projectMetaData(id: { eq: $projectId }) {
      title
      skill
      content
      period
      description
      thumbnail {
        gatsbyImageData(width: 768)
      }
      extraImage {
        gatsbyImageData(width: 300)
      }
    }
  }
`
