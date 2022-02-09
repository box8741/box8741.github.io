import React, { FunctionComponent } from 'react'
import { graphql, PageProps } from 'gatsby'
import { IGatsbyImageData } from 'gatsby-plugin-image'
import Layout from 'components/Common/Layout'
import Introduction from 'components/Main/Introduction'
import SubTItle from 'components/Common/SubTitle'
import ExperienceList from 'components/Main/ExperienceList'
import CareerList from 'components/Main/CareerList'

type IndexPageProps = PageProps & {
  data: {
    site: {
      siteMetadata: {
        title: string
        description: string
        siteUrl: string
      }
    }
    file: {
      childImageSharp: {
        gatsbyImageData: IGatsbyImageData
      }
      publicURL: string
    }
  }
}

const IndexPage: FunctionComponent<IndexPageProps> = ({
  data: {
    site: {
      siteMetadata: { title, description, siteUrl },
    },
    file: {
      childImageSharp: { gatsbyImageData },
      publicURL,
    },
  },
}) => {
  return (
    <Layout title={title} description={description} url={siteUrl} image={publicURL}>
      <Introduction profileImage={gatsbyImageData} />
      <SubTItle>Experience</SubTItle>
      <ExperienceList />
      <CareerList />
    </Layout>
  )
}

export default IndexPage

export const getIndexData = graphql`
  query getIndexData {
    site {
      siteMetadata {
        title
        description
        siteUrl
      }
    }
    file(name: { eq: "profile-image" }) {
      childImageSharp {
        gatsbyImageData(width: 260, height: 260)
      }
      publicURL
    }
  }
`
