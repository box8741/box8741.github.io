import React, { FunctionComponent } from 'react'
import { graphql, PageProps } from 'gatsby'
import Layout from 'components/Common/Layout'
import Title from 'components/Common/Title'
import SubTitle from 'components/Common/SubTitle'
import ProjectList from 'components/Main/ProjectList'

import { ProjectListType, ProjectListItemType } from 'types/ProjectItem.types'

const PAGE_METADATA = {
  title: 'Project',
  description: '프로젝트',
}

type ProjectPageProps = PageProps & {
  data: {
    allFile: {
      edges: ProjectListType[]
    }
    file: {
      publicURL: string
    }
  }
}

const ProjectPage: FunctionComponent<ProjectPageProps> = ({
  location: { href },
  data: {
    allFile: { edges },
    file: { publicURL },
  },
}) => {
  const {
    node: {
      childStaticJson: { app, web },
    },
  } = edges[0]

  return (
    <Layout {...PAGE_METADATA} image={publicURL} url={href}>
      <Title>Project</Title>
      <SubTitle>App</SubTitle>
      <ProjectList list={app} />
      <SubTitle>Web</SubTitle>
      <ProjectList list={web} />
    </Layout>
  )
}

export default ProjectPage

export const getProjectData = graphql`
  query getProjectData {
    allFile(filter: { name: { eq: "ProjectList" } }) {
      edges {
        node {
          childStaticJson {
            app {
              title
              content
              period
              description
              thumbnail {
                childImageSharp {
                  gatsbyImageData(width: 300, height: 200, transformOptions: { fit: OUTSIDE })
                }
              }
            }
            web {
              title
              content
              period
              description
              thumbnail {
                childImageSharp {
                  gatsbyImageData(width: 300, height: 200, transformOptions: { fit: OUTSIDE })
                }
              }
            }
          }
        }
      }
    }

    file(name: { eq: "profile-image" }) {
      publicURL
    }
  }
`
