import React from 'react'
import Helmet from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby';

export default function SEO() {
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `);

  return (
    <div>
      <Helmet>
        <html lang="en" />
        <title>{site.siteMetadata.title}</title>
        <meta name="og:type" content="website" />
        <meta name="og:title" content={site.siteMetadata.title} />
        <meta name="og:description" content={site.siteMetadata.description} />
        <meta name="p:domain_verify" content="ed2fd09904cc4be69e2f74c3708bda32"/>
        <link rel="shortcut icon" href="favicon.ico" />
      </Helmet>
    </div>
  )

}
