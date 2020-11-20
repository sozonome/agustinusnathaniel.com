import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Helmet from "react-helmet";
import {
  TwitterShareButton,
  FacebookShareButton,
  LinkedinShareButton,
  WhatsappShareButton,
  FacebookIcon,
  LinkedinIcon,
  WhatsappIcon,
  TelegramShareButton,
  TelegramIcon,
  TwitterIcon,
} from "react-share";

const configQuery = require("../../data/siteConfig");

export default function blogTemplate({ data }) {
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;
  const { siteMetadata } = configQuery;

  return (
    <Layout>
      <Helmet>
        <title>
          {frontmatter.title} | {siteMetadata.title}
        </title>
      </Helmet>
      <div className="post">
        <div className="postContainer">
          <div id="post-head" className="mb-8">
            <h1 className="font-bold text-4xl mb-2">{frontmatter.title}</h1>
            <div className="flex items-center h-4 mb-2">
              <h2 className="text-sm mr-4">{frontmatter.date}</h2>
            </div>
            <ShareButtons
              frontmatter={frontmatter}
              siteMetadata={siteMetadata}
            />
          </div>
          <div
            className="mkdown mb-6"
            dangerouslySetInnerHTML={{ __html: html }}
          />
          <ShareButtons frontmatter={frontmatter} siteMetadata={siteMetadata} />
        </div>
      </div>
    </Layout>
  );
}

const ShareButtons = ({ frontmatter, siteMetadata }) => {
  return (
    <div className="flex items-center">
      <TwitterShareButton
        title={frontmatter.title}
        via={siteMetadata.social.twitter}
        url={siteMetadata.siteUrl + frontmatter.path}
      >
        <div className="flex items-center rounded-lg">
          <TwitterIcon className="h-8 w-8 mr-2" round={true} />
        </div>
      </TwitterShareButton>
      <FacebookShareButton
        title={frontmatter.title}
        url={siteMetadata.siteUrl + frontmatter.path}
      >
        <div className="flex items-center rounded-lg">
          <FacebookIcon className="h-8 w-8 mr-2" round={true} />
        </div>
      </FacebookShareButton>
      <LinkedinShareButton
        title={frontmatter.title}
        url={siteMetadata.siteUrl + frontmatter.path}
      >
        <div className="flex items-center rounded-lg p-0">
          <LinkedinIcon className="h-8 w-8 mr-2" round={true} />
        </div>
      </LinkedinShareButton>
      <WhatsappShareButton
        title={frontmatter.title}
        url={siteMetadata.siteUrl + frontmatter.path}
      >
        <div className="flex items-center rounded-lg p-0 mr-2">
          <WhatsappIcon className="h-8 w-8" round={true} />
        </div>
      </WhatsappShareButton>
      <TelegramShareButton
        title={frontmatter.title}
        url={siteMetadata.siteUrl + frontmatter.path}
      >
        <div className="flex items-center rounded-lg p-0">
          <TelegramIcon className="h-8 w-8" round={true} />
        </div>
      </TelegramShareButton>
    </div>
  );
};

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
`;
