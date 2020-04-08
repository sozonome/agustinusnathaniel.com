import React from 'react'
import Layout from '../components/Layout'
import {graphql, Link} from 'gatsby'

export default function dev({
  data:{
    allMarkdownRemark: {edges},
  },
}) {
  return (
    <Layout>
      <div className="flex items-center w-full">
        <h1 className="w-1/2 text-5xl font-bold mb-2">Dev Blog</h1>
        <div className="flex w-1/2 justify-end">
          <Link className="py-2 px-4 h-12 text-lg bg-teal-700 rounded" to="/blog">Personal</Link>
        </div>
      </div>
      <div className="w-full mt-16">
        {
          edges
            .filter(edge => edge.node.frontmatter.title.length > 0)
            .map((edge) => {
              return(
                <Link to={'/dev/'+edge.node.frontmatter.slug} className="w-full">
                  <div className="bg-gray-700 rounded-lg p-6 mb-8 hover:bg-blue-800">
                    <h1 className="text-2xl font-bold mb-1">
                      {edge.node.frontmatter.title}
                    </h1>
                    <h2 className="text-sm text-gray-300 font-light mb-2">{edge.node.frontmatter.date}</h2>
                    {/* <p className="text-sm text-gray-300">{edge.node.excerpt}</p> */}
                  </div>
                </Link>
              )
            })
        }
      </div>
    </Layout>
  )
}


export const pageQuery = graphql`
  query{
    allMarkdownRemark(
      sort: {order: DESC, 
      fields: [frontmatter___date]},
      filter: {
        frontmatter: {
          type: {eq: "dev"}
        }
      }
    ) {
      edges {
        node {
          excerpt(pruneLength: 100)
          frontmatter{
            title
            type
            date(formatString: "MMMM DD, YYYY")
            slug
          }
        }
      }
    }
  }
`