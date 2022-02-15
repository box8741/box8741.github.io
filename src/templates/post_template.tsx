import React, { FunctionComponent } from 'react'
import { graphql, PageProps } from 'gatsby'
import { IGatsbyImageData } from 'gatsby-plugin-image'
import Layout from 'components/Common/Layout'
import PostHead from 'components/Post/PostHead'
import PostContent from 'components/Post/PostContent'
import ProfileWidget from 'components/Post/ProfileWidget'
import CommentWidget from 'components/Post/CommonWidget'
import AnotherPage, { PageContextItemType } from 'components/Post/AnotherPage'

import { PostFrontmatterType } from 'types/PostItem.types'

export type PostPageItemType = {
  node: {
    html: string
    tableOfContents: string
    frontmatter: PostFrontmatterType
  }
}

type PostTemplateProps = {
  data: {
    allMarkdownRemark: {
      edges: PostPageItemType[]
    }
    file: {
      childImageSharp: { profileImage: IGatsbyImageData }
    }
  }
  location: PageProps['location']
  pageContext: {
    prev: PageContextItemType
    next: PageContextItemType
  }
}

const PostTemplate: FunctionComponent<PostTemplateProps> = ({
  data: {
    allMarkdownRemark: { edges },
    file: {
      childImageSharp: { profileImage },
    },
  },
  pageContext,
  location: { href },
}) => {
  const {
    node: {
      html,
      tableOfContents,
      frontmatter: {
        title,
        summary,
        date,
        categories,
        thumbnail: {
          childImageSharp: { gatsbyImageData },
          publicURL,
        },
      },
    },
  } = edges[0]

  console.log('pageContext : ', pageContext)

  return (
    <Layout title={title} description={summary} url={href} image={publicURL}>
      <PostHead title={title} date={date} categories={categories} thumbnail={gatsbyImageData} />
      <PostContent html={html} tableOfContents={tableOfContents} />
      <ProfileWidget profileImage={profileImage} />
      <AnotherPage pageContext={pageContext} />
      <CommentWidget />
    </Layout>
  )
}

export default PostTemplate

export const queryMarkdownDataBySlug = graphql`
  query queryMarkdownDataBySlug($slug: String) {
    allMarkdownRemark(filter: { fields: { slug: { eq: $slug } } }) {
      edges {
        node {
          html
          tableOfContents
          frontmatter {
            title
            summary
            date(formatString: "YYYY.MM.DD")
            categories
            thumbnail {
              childImageSharp {
                gatsbyImageData
              }
              publicURL
            }
          }
        }
      }
    }
    file(name: { eq: "profile-image" }) {
      childImageSharp {
        profileImage: gatsbyImageData(width: 140, height: 140)
      }
    }
  }
`
