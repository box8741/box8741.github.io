const path = require('path')
const { createFilePath } = require(`gatsby-source-filesystem`)
const projectList = require('./static/ProjectList.json')

exports.onCreateWebpackConfig = ({ getConfig, actions }) => {
  const output = getConfig().output || {}

  actions.setWebpackConfig({
    output,
    resolve: {
      alias: {
        components: path.resolve(__dirname, 'src/components'),
        utils: path.resolve(__dirname, 'src/utils'),
        hooks: path.resolve(__dirname, 'src/hooks'),
      },
    },
  })
}

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode })
    createNodeField({ node, name: `slug`, value: `/blog${slug}` })
  }
}

// exports.sourceNodes = ({ actions: { createNode }, createNodeId, createContentDigest }) => {
//   projectList.forEach((data, index) => {
//     createNode({
//       ...data,
//       id: createNodeId(`project-${index}`),
//       internal: {
//         type: `project`,
//         contentDigest: createContentDigest(data),
//       },
//     })
//   })
// }

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions

  const queryAllMarkdownData = await graphql(
    `
      {
        allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date, frontmatter___title] }) {
          edges {
            node {
              fields {
                slug
              }
            }
          }
        }
      }
    `,
  )

  if (queryAllMarkdownData.errors) {
    reporter.panicOnBuild(`Error while running query`)
    return
  }

  queryAllMarkdownData.data.allMarkdownRemark.edges.forEach(
    ({
      node: {
        fields: { slug },
      },
    }) => {
      createPage({
        path: slug,
        component: path.resolve(__dirname, 'src/templates/post_template.tsx'),
        context: { slug },
      })
    },
  )
}
