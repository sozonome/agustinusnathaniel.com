import React from 'react';
import {graphql} from "gatsby";
import Layout from '../components/Layout';

export default function blogTemplate({
  data
}) {
  const {markdownRemark} = data
  const { frontmatter, html } = markdownRemark

  return (
    <Layout>
      <div className="post">
        <div className="postContainer">
          <h1 className="font-bold text-4xl mb-2">{frontmatter.title}</h1>
          <h2 className="text-sm mb-8">{frontmatter.date}</h2>
          <div
            className="mkdown"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
      }
    }
  }
`