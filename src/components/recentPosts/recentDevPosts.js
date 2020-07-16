import React from "react"
import { graphql } from "gatsby"

export default function RecentDevPosts() {
  return <div id="recent-dev-post"></div>
}

export const queryRecentDevPosts = graphql`
  query recentDevPosts {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      limit: 2
      filter: { frontmatter: { published: { eq: true }, type: { eq: "dev" } } }
    ) {
      edges {
        node {
          frontmatter {
            thumbnail
            slug
            type
            title
          }
        }
      }
    }
  }
`
