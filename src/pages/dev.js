import React from "react"
import Layout from "../components/Layout"
import { graphql, Link } from "gatsby"

export default function dev({
  data: {
    allMarkdownRemark: { edges },
  },
}) {
  return (
    <Layout>
      <div className="mb-4">
        <Link
          className="py-2 px-4 h-10 text-sm bg-gray-700 rounded mr-2 hover:bg-blue-700"
          to="/blog"
        >
          Personal
        </Link>
        <Link className="py-2 px-4 h-10 text-sm bg-teal-700 rounded" to="/dev">
          Dev Notes
        </Link>
      </div>
      <h1 className="text-5xl font-bold mb-2">Dev Blog</h1>
      <div className="w-full mt-16">
        {edges
          .filter((edge) => edge.node.frontmatter.title.length > 0)
          .map((edge, index) => {
            return (
              <Link
                key={index}
                to={"/dev/" + edge.node.frontmatter.slug}
                className=""
              >
                <div className="group flex rounded-lg p-6 mb-4 w-full hover:bg-gray-900">
                  <div className="mr-4 flex items-center">
                    <img
                      className=""
                      src={edge.node.frontmatter.thumbnail}
                      alt=""
                    />
                  </div>
                  <div className="w-5/6">
                    <h1 className="text-2xl font-bold mb-1 group-hover:text-teal-400">
                      {edge.node.frontmatter.title}
                    </h1>
                    <h2 className="text-sm text-gray-300 font-light mb-2">
                      {edge.node.frontmatter.date}
                    </h2>
                    {/* <p className="text-sm text-gray-300">{edge.node.excerpt}</p> */}
                  </div>
                </div>
                {/* <PostCard value={edge.node} postType="blog"/> */}
              </Link>
            )
          })}
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { type: { eq: "dev" } } }
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
