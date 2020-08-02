import React from "react"
import Layout from "../components/Layout"
import { graphql, Link } from "gatsby"
import PostCard from "../components/PostCard"

export default function blog({
  data: {
    allMarkdownRemark: { edges },
  },
}) {
  return (
    <Layout>
      <div className="mb-4">
        <Link
          className="py-2 px-4 h-10 text-sm bg-blue-700 rounded mr-2"
          to="/blog"
        >
          Personal
        </Link>
        <Link
          className="py-2 px-4 h-10 text-sm bg-gray-700 rounded hover:bg-teal-700"
          to="/dev"
        >
          Dev Notes
        </Link>
      </div>
      <h1 className="text-5xl font-bold mb-2">Blog</h1>
      <div className="mt-16">
        {edges
          .filter((edge) => edge.node.frontmatter.title.length > 0)
          .map((edge, index) => {
            return <PostCard key={index} value={edge} />
          })}
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: {
        frontmatter: { type: { eq: "personal" }, published: { eq: true } }
      }
    ) {
      edges {
        node {
          excerpt(pruneLength: 100)
          frontmatter {
            title
            type
            date(formatString: "MMMM DD, YYYY")
            slug
            thumbnail
          }
        }
      }
    }
  }
`
