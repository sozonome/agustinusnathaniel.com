import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import ProjectCard from "../components/ProjectCard"

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
              return <ProjectCard key={index} value={project} />
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
