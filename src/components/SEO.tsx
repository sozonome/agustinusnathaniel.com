import React from "react"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

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
  `)

  return (
    <Helmet>
      <html lang="en" />
      {/* <!-- Primary Meta Tags --> */}
      <title>{site.siteMetadata.title}</title>
      {/* <meta name="title" content={""} /> */}
      <meta name="description" content={site.siteMetadata.description} />

      {/* <!-- Open Graph / Facebook --> */}
      <meta property="og:type" content="website" />
      {/* <meta property="og:url" content={""} /> */}
      <meta property="og:title" content={site.siteMetadata.title} />
      <meta property="og:description" content={site.siteMetadata.description} />
      {/* <meta property="og:image" content={""} /> */}

      {/* <!-- Twitter --> */}
      {/* <meta property="twitter:card" content="summary_large_image" /> */}
      {/* <meta property="twitter:url" content={""} /> */}
      {/* <meta property="twitter:title" content={""} /> */}
      {/* <meta property="twitter:description" content={""} /> */}
      {/* <meta property="twitter:image" content={""} /> */}

      <link rel="shortcut icon" href="favicon.ico" />
    </Helmet>
  )
}
