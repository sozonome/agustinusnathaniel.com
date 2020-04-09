import React from 'react';
import {graphql} from "gatsby";
import Layout from '../components/Layout';
import configQuery from '../../data/siteConfig';

export default function blogTemplate({
  data
}) {
  const {markdownRemark} = data
  const { frontmatter, html } = markdownRemark
  const { siteMetadata  } = configQuery
  const shareTwtr = `http://twitter.com/share?text=${frontmatter.title}&url=${siteMetadata.siteUrl}${frontmatter.path}/&via=sozonome`

  return (
    <Layout>
      <div className="post">
        <div className="postContainer">
          <div id="post-head" className="mb-8">
            <h1 className="font-bold text-4xl mb-2">{frontmatter.title}</h1>
            <div className="flex items-center h-10">
              <h2 className="text-sm mr-4">{frontmatter.date}</h2>
              <a href={shareTwtr} className="text-blue-600 font-bold text-sm hover:font-extrabold hover:text-blue-400" target="_blank" rel="noopener">Share</a>
            </div>
          </div>
          <div
            className="mkdown mb-6"
            dangerouslySetInnerHTML={{ __html: html }}
          />
          <a href={shareTwtr} className="py-2 px-4 font-bold text-sm bg-blue-600 hover:bg-blue-400 rounded-md" target="_blank" rel="noopener">Share</a>
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
        path
      }
    }
  }
`