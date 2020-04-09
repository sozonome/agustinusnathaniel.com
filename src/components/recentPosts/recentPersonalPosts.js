import React from 'react'
import { graphql, Link } from 'gatsby'

export default function RecentPersonalPosts({
  data:{
    allMarkdownRemark: {edges}
  }
}) {

  return (
    <div id="recent-personal-posts">
      {
        edges
          .filter(edge => edge.node.frontmatter.title.length > 0)
          .map((edge) => {
            return(
              <Link to={'/blog/'+edge.node.frontmatter.slug} className="">
                <div className="flex bg-gray-700 rounded-lg p-6 mb-8 hover:bg-blue-800 w-full">
                  <div className="mr-2 flex items-center">
                    <img className="max-w-1/4 min-w-6" src={edge.node.frontmatter.thumbnail} alt=""/>
                  </div>
                  <div className="w-5/6">
                    <h1 className="text-2xl font-bold mb-1">
                      {edge.node.frontmatter.title}
                    </h1>
                    <h2 className="text-sm text-gray-300 font-light mb-2">{edge.node.frontmatter.date}</h2>
                    {/* <p className="text-sm text-gray-300">{edge.node.excerpt}</p> */}
                  </div>
                </div>
                {/* <PostCard value={edge.node} postType="blog"/> */}
              </Link>
            )
          })
        }
    </div>
  )
}

export const queryRecentPersonalPosts = graphql`
  query {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      limit: 2
      filter: {
        frontmatter: {
          published: {
            eq: true
          }
          type: {
            eq: "personal"
          }
        }
      }
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