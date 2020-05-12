import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"

export default function projects({
  data: {
    allMarkdownRemark: { edges },
  },
}) {
  return (
    <Layout>
      <div className="text-gray-500">
        <h1 className="text-4xl font-bold">Projects / Portfolios</h1>
        <p className="text-sm font-semibold">
          Previous projects I've worked on.
        </p>
        <div className="mt-12 sm:flex sm:flex-wrap">
          {edges
            .filter(edge => edge.node.frontmatter.title.length > 0)
            .map((edge, index) => {
              const project = edge.node.frontmatter
              // const projectHtml = edge.node.html
              return (
                <div className="projectCard w-full sm:w-1/2 sm:flex-none my-2" key={index}>
                  <div className="h-48 bg-gray-900 hover:bg-blue-800 p-4 rounded-lg">
                    <h2 className="text-2xl font-bold">{project.title}</h2>
                    <p className="text-sm mb-4">{project.description}</p>
                    {/* <div
                    className="flex projectStacks mb-2"
                    dangerouslySetInnerHTML={{ __html: projectHtml }}
                  /> */}
                    <div className="flex">
                      {project.projectLink ? (
                        <a
                          className="font-bold bg-teal-800 hover:bg-orange-600 hover:text-white rounded-lg p-2 mr-2"
                          href={project.projectLink}
                          target="_blank"
                          rel="noreferrer noopener"
                        >
                          Visit
                        </a>
                      ) : null}
                      {project.repoLink ? (
                        <a
                          className="font-bold border border-blue-200 hover:bg-white hover:text-black rounded-lg p-2 mr-2"
                          href={project.repoLink}
                          target="_blank"
                          rel="noreferrer noopener"
                        >
                          Source
                        </a>
                      ) : null}
                    </div>
                  </div>
                </div>
              )
            })}
        </div>
      </div>
    </Layout>
  )
}

export const projectsQuery = graphql`
  query {
    allMarkdownRemark(
      sort: { order: DESC, fields: frontmatter___date }
      filter: { frontmatter: { type: { eq: "projects" } } }
    ) {
      edges {
        node {
          frontmatter {
            title
            projectLink
            repoLink
            description
          }
          html
        }
      }
    }
  }
`
