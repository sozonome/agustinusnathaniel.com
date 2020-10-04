const path = require(`path`)

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions

  const blogPostTemplate = path.resolve(`src/templates/blogTemplate.js`)

  const result = await graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
        filter: { frontmatter: { published: { eq: true } } }
      ) {
        edges {
          node {
            frontmatter {
              slug
              type
              path
            }
          }
        }
      }
    }
  `)

  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    if (node.frontmatter.type === "personal") {
      createPage({
        path: "/blog/" + node.frontmatter.slug,
        component: blogPostTemplate,
        context: {}, // additional data can be passed via context
      })
    }
  })
}
