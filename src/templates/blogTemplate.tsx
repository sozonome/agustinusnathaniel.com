import React from 'react';
import {graphql} from "gatsby";
import Layout from '../components/Layout';
import Helmet from 'react-helmet';
import { library, config } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const configQuery = require('../../data/siteConfig');

config.autoAddCss = false;
library.add(fab);

export default function blogTemplate({
  data
}) {
  const {markdownRemark} = data
  const { frontmatter, html } = markdownRemark
  const { siteMetadata  } = configQuery
  const shareTwtr = `http://twitter.com/share?text=${frontmatter.title}&url=${siteMetadata.siteUrl}${frontmatter.path}/&via=sozonome`
  // const shareFb = `https://www.facebook.com/plugins/share_button.php?href=${siteMetadata.siteUrl}${frontmatter.path}&t=${frontmatter.title}&layout=button&size=small&width=79&height=20&appId`
  // const shareFbLg = `https://www.facebook.com/plugins/share_button.php?href=${siteMetadata.siteUrl}${frontmatter.path}&t=${frontmatter.title}&layout=button&size=small&width=91&height=28&appId`

  return (
    <Layout>
      <Helmet>
        <title>{frontmatter.title} | {siteMetadata.title}</title>
      </Helmet>
      <div className="post">
        <div className="postContainer">
          <div id="post-head" className="mb-8">
            <h1 className="font-bold text-4xl mb-2">{frontmatter.title}</h1>
            <div className="flex items-center h-10">
              <h2 className="text-sm mr-4">{frontmatter.date}</h2>
              <a href={shareTwtr} className="flex text-blue-600 font-bold text-sm hover:font-extrabold hover:text-blue-400" target="_blank" rel="noopener">
                <FontAwesomeIcon className="w-4 mr-1" icon={['fab', 'twitter']} size="xs"/> 
                <div>Share</div>
              </a>
              {/* <iframe className="ml-2" src={shareFb} width="100" height="32" style={{border:"none",overflow:"hidden"}} scrolling="no" frameborder="0" allowTransparency="true" allow="encrypted-media"></iframe> */}
            </div>
          </div>
          <div
            className="mkdown mb-6"
            dangerouslySetInnerHTML={{ __html: html }}
          />
          <div className="flex items-center">
            <a href={shareTwtr} className="flex py-2 px-4 font-bold text-sm bg-blue-600 hover:bg-blue-400 rounded-md" target="_blank" rel="noopener">
              <FontAwesomeIcon className="w-4 mr-1" icon={['fab', 'twitter']} size="xs"/> 
              <div>Share</div>
            </a>
            {/* <iframe className="ml-2" src={shareFbLg} width="100" height="56" style={{border:"none",overflow:"hidden"}} scrolling="no" frameborder="0" allowTransparency="true" allow="encrypted-media"></iframe> */}
          </div>
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