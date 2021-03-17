import React from "react";
import Helmet from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

const SEO = () => {
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          ogImage
          social {
            twitter
          }
        }
      }
    }
  `);

  return (
    <Helmet>
      <html lang="en" />
      {/* <!-- Primary Meta Tags --> */}
      <title>{site.siteMetadata.title}</title>
      {/* <meta name="title" content={""} /> */}
      <meta name="description" content={site.siteMetadata.description} />

      {/* <!-- Open Graph / Facebook --> */}
      {/* https://developers.facebook.com/docs/sharing/webmasters/ */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://agustinusnathaniel.com" />
      <meta property="og:title" content={site.siteMetadata.title} />
      <meta property="og:description" content={site.siteMetadata.description} />
      <meta property="og:image" content={site.siteMetadata.ogImage} />

      {/* <!-- Twitter --> */}
      {/* https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/summary */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta
        property="twitter:site"
        content={`@${site.siteMetadata.social.twitter}`}
      />
      <meta property="twitter:title" content="agustinusnathaniel.com" />
      <meta
        property="twitter:description"
        content="Agustinus Nathaniel's personal site"
      />
      <meta property="twitter:image" content={site.siteMetadata.ogImage} />

      <link rel="shortcut icon" href="favicon.ico" />
    </Helmet>
  );
};

export default SEO;
