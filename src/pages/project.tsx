import React, { FunctionComponent } from 'react'
import { graphql, PageProps } from 'gatsby'
import Layout from 'components/Common/Layout'
import Title from 'components/Common/Title'
import SubTitle from 'components/Common/SubTitle'
import ProjectList from 'components/Main/ProjectList'

import { ProjectListItemType } from 'types/ProjectItem.types'

const PAGE_METADATA = {
  title: 'Project',
  description: '프로젝트',
}

type ProjectPageProps = PageProps & {
  data: {
    appList: {
      edges: ProjectListItemType[]
    }
    webList: {
      edges: ProjectListItemType[]
    }
    file: {
      publicURL: string
    }
  }
}

const ProjectPage: FunctionComponent<ProjectPageProps> = ({
  location: { href },
  data: {
    appList,
    webList,
    file: { publicURL },
  },
}) => {
  return (
    <Layout {...PAGE_METADATA} image={publicURL} url={href}>
      <Title>Project</Title>
      <SubTitle>App</SubTitle>
      <ProjectList list={appList.edges} />
      <SubTitle>Web</SubTitle>
      <ProjectList list={webList.edges} />
    </Layout>
  )
}

export default ProjectPage

export const getProjectData = graphql`
  fragment ProjectData on ProjectMetaData {
    id
    type
    title
    content
    period
    description
    thumbnail {
      gatsbyImageData(width: 300, height: 200, transformOptions: { fit: OUTSIDE })
    }
  }

  query getProjectData {
    appList: allProjectMetaData(filter: { type: { eq: "app" } }) {
      edges {
        node {
          ...ProjectData
        }
      }
    }

    webList: allProjectMetaData(filter: { type: { eq: "web" } }) {
      edges {
        node {
          ...ProjectData
        }
      }
    }

    file(name: { eq: "profile-image" }) {
      publicURL
    }
  }
`
