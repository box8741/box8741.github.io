const path = require('path')
const { createFilePath } = require(`gatsby-source-filesystem`)
const ProjectList = require('./static/ProjectList.json')

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
    createNodeField({ node, name: `slug`, value: slug })
  }
}

exports.createSchemaCustomization = ({ actions, schema }) => {
  const { createTypes } = actions

  const typeDefs = [
    schema.buildObjectType({
      name: 'ProjectMetaData',
      fields: {
        thumbnail: {
          type: 'ImageSharp',
          resolve: async (source, args, context, info) => {
            const imageNode = await context.nodeModel.findOne({
              type: 'ImageSharp',
              query: {
                filter: {
                  fluid: {
                    originalName: { eq: source.thumbnail },
                  },
                },
              },
            })

            return imageNode
          },
        },
        extraImage: {
          type: '[ImageSharp]',
          resolve: async (source, args, context, info) => {
            const imageNodeArray = await Promise.all(
              source.extraImage.map(async fileName => {
                const imageNode = await context.nodeModel.findOne({
                  type: 'ImageSharp',
                  query: {
                    filter: {
                      fluid: {
                        originalName: { eq: fileName },
                      },
                    },
                  },
                })
                return imageNode
              }),
            )
            return imageNodeArray
          },
        },
      },
      interfaces: ['Node'],
      extensions: { infer: true },
    }),
  ]

  createTypes(typeDefs)
}

exports.sourceNodes = async ({ actions: { createNode }, createNodeId, createContentDigest }) => {
  const generateProjectNode = type => {
    ProjectList[type].forEach((projectItem, index) => {
      createNode({
        ...projectItem,
        id: createNodeId(`project-${type}-${index}`),
        type,
        internal: {
          type: `ProjectMetaData`,
          contentDigest: createContentDigest(projectItem),
        },
      })
    })
  }

  generateProjectNode('app')
  generateProjectNode('web')
}

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
              frontmatter {
                title
              }
            }
          }
        }
      }
    `,
  )

  const queryAllProjectData = await graphql(
    `
      {
        allProjectMetaData {
          edges {
            node {
              id
              type
            }
          }
        }
      }
    `,
  )

  if (queryAllMarkdownData.errors || queryAllProjectData.errors) {
    reporter.panicOnBuild(`Error while running query`)
    return
  }

  const projectByType = projectType =>
    queryAllProjectData.data.allProjectMetaData.edges.reduce((acc, { node: { id, type } }) => {
      if (projectType === type) acc.push(id)
      return acc
    }, [])

  const generateProjectPage = type => {
    projectByType(type).forEach((id, index) => {
      createPage({
        path: `/project/${type}_${index}`,
        component: path.resolve(__dirname, 'src/templates/project_template.tsx'),
        context: { projectId: id },
      })
    })
  }

  generateProjectPage('app')
  generateProjectPage('web')

  const posts = queryAllMarkdownData.data.allMarkdownRemark.edges
  posts.forEach(
    (
      {
        node: {
          fields: { slug },
        },
      },
      index,
    ) => {
      createPage({
        path: slug,
        component: path.resolve(__dirname, 'src/templates/post_template.tsx'),
        context: {
          slug,
          prev: index === 0 ? null : posts[index - 1].node,
          next: index === posts.length - 1 ? null : posts[index + 1].node,
        },
      })
    },
  )
}
