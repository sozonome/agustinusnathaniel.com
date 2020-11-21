import React from "react";
import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import { graphql } from "gatsby";
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

import Layout from "../components/Layout";

const configQuery = require("../../data/siteConfig");

export default function blogTemplate({ data }: any) {
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

      <Box className="post">
        <Box className="postContainer">
          <Box as="section" marginBottom={8} id="post-head">
            <Heading fontWeight="bold" size="2xl" marginBottom={2}>
              {frontmatter.title}
            </Heading>
            <Flex alignItems="center" height={4} marginBottom={2}>
              <Text fontSize="sm">{frontmatter.date}</Text>
            </Flex>
            <ShareButtons
              frontmatter={frontmatter}
              siteMetadata={siteMetadata}
            />
          </Box>

          <Box
            marginBottom={6}
            className="mkdown"
            dangerouslySetInnerHTML={{ __html: html }}
          />

          <ShareButtons frontmatter={frontmatter} siteMetadata={siteMetadata} />
        </Box>
      </Box>
    </Layout>
  );
}

const ShareButtons = ({ frontmatter, siteMetadata }: any) => {
  return (
    <Flex alignItems="center">
      <TwitterShareButton
        title={frontmatter.title}
        via={siteMetadata.social.twitter}
        url={siteMetadata.siteUrl + frontmatter.path}
      >
        <Flex alignItems="center" height={8} width={8} marginRight={2}>
          <TwitterIcon round={true} />
        </Flex>
      </TwitterShareButton>

      <FacebookShareButton
        title={frontmatter.title}
        url={siteMetadata.siteUrl + frontmatter.path}
      >
        <Flex alignItems="center" height={8} width={8} marginRight={2}>
          <FacebookIcon round={true} />
        </Flex>
      </FacebookShareButton>

      <LinkedinShareButton
        title={frontmatter.title}
        url={siteMetadata.siteUrl + frontmatter.path}
      >
        <Flex alignItems="center" height={8} width={8} marginRight={2}>
          <LinkedinIcon round={true} />
        </Flex>
      </LinkedinShareButton>

      <WhatsappShareButton
        title={frontmatter.title}
        url={siteMetadata.siteUrl + frontmatter.path}
      >
        <Flex alignItems="center" height={8} width={8} marginRight={2}>
          <WhatsappIcon round={true} />
        </Flex>
      </WhatsappShareButton>

      <TelegramShareButton
        title={frontmatter.title}
        url={siteMetadata.siteUrl + frontmatter.path}
      >
        <Flex alignItems="center" height={8} width={8} marginRight={2}>
          <TelegramIcon round={true} />
        </Flex>
      </TelegramShareButton>
    </Flex>
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
