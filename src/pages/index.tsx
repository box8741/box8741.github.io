import React, { FunctionComponent } from 'react'
import { graphql, PageProps } from 'gatsby'
import { IGatsbyImageData } from 'gatsby-plugin-image'
import { useSiteMetadata } from 'hooks/useSiteMetadata'
import Layout from 'components/Common/Layout'
import PageTemplate from 'components/Common/PageTemplate'
import Introduction from 'components/Main/Introduction'
import PreviewPostList from 'components/Main/PreviewPostList'

import { PostListItemType } from 'types/PostItem.types'

type IndexPageProps = PageProps & {
  data: {
    allMarkdownRemark: {
      edges: PostListItemType[]
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
    allMarkdownRemark: { edges },
    file: {
      childImageSharp: { gatsbyImageData },
      publicURL,
    },
  },
}) => {
  const { title, description, siteUrl } = useSiteMetadata()
  return (
    <Layout title={title} description={description} url={siteUrl} image={publicURL}>
      <PageTemplate>
        <Introduction profileImage={gatsbyImageData} />
        <PreviewPostList posts={edges} />
      </PageTemplate>
    </Layout>
  )
}

export default IndexPage

export const getIndexData = graphql`
  query getIndexData {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date, frontmatter___title] }) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            title
            summary
            date(formatString: "YYYY.MM.DD")
            categories
            thumbnail {
              childImageSharp {
                gatsbyImageData(transformOptions: { fit: OUTSIDE }, width: 65, height: 65)
              }
            }
          }
        }
      }
    }
    file(name: { eq: "profile-image" }) {
      childImageSharp {
        gatsbyImageData(width: 160, height: 160)
      }
      publicURL
    }
  }
`
