import React, { useMemo, FunctionComponent } from 'react'
import { graphql, PageProps } from 'gatsby'
import queryString, { ParsedQuery } from 'query-string'
import Layout from 'components/Common/Layout'
import PageTemplate from 'components/Common/PageTemplate'
import CategoryList, { CategoryListProps } from 'components/Main/CategoryList'
import PostList from 'components/Main/PostList'
import Title from 'components/Common/Title'

import { PostListItemType } from 'types/PostItem.types'

const PAGE_METADATA = {
  title: 'Developer Min | Blog',
  description: '개발 블로그',
}

type BlogPageProps = PageProps & {
  data: {
    allMarkdownRemark: {
      edges: PostListItemType[]
    }
    file: {
      publicURL: string
    }
  }
}

const BlogPage: FunctionComponent<BlogPageProps> = ({
  location: { href, search },
  data: {
    allMarkdownRemark: { edges },
    file: { publicURL },
  },
}) => {
  const parsed: ParsedQuery<string> = queryString.parse(search)
  const selectedCategory: string = typeof parsed.category !== 'string' || !parsed.category ? 'All' : parsed.category

  const categoryList = useMemo(
    () =>
      edges.reduce(
        (
          list: CategoryListProps['categoryList'],
          {
            node: {
              frontmatter: { categories },
            },
          },
        ) => {
          categories.forEach(category => {
            if (list[category] === undefined) list[category] = 1
            else list[category]++
          })
          list['All']++
          return list
        },
        { All: 0 },
      ),
    [],
  )

  return (
    <Layout {...PAGE_METADATA} url={href} image={publicURL}>
      <PageTemplate>
        <Title>Blog</Title>
        <CategoryList selectedCategory={selectedCategory} categoryList={categoryList} />
        <PostList selectedCategory={selectedCategory} posts={edges} />
      </PageTemplate>
    </Layout>
  )
}

export default BlogPage

export const getPostList = graphql`
  query getPostList {
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
                gatsbyImageData(width: 180)
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
