import React, { FunctionComponent } from 'react'
import { graphql, PageProps } from 'gatsby'
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image'
import Layout from 'components/Common/Layout'
import Introduction from 'components/Main/Introduction'

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
