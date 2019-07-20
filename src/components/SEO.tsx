import React, { Component } from 'react'
import Helmet from 'react-helmet'

const config = require('../../config/website')
const realPrefix = config.pathPrefix === '/' ? '' : config.pathPrefix
const homeURL= `${config.siteUrl}${realPrefix}`

export default class SEO extends Component {
  render() {
    const {
      siteTitle,
      siteTitleAlt,
      siteTitleShort,
      siteHeadline, 
      siteUrl,
      siteLanguage, 
      siteLogo, 
      siteDescription,
      author,
      userInstagram,
      userYoutube,
      userLinkedin,
      userGithub,
      googleAnalyticsID,
    } = config;

    return (
      <div>
        <Helmet>
          <html lang={siteLanguage}/>
          <title>{siteTitle}</title>
          <meta name="og:type" content="website"/>
          <meta name="og:title" content={siteTitle} />
          <meta name="og:description" content={siteDescription} />
          <meta name="og:image" content={homeURL+siteLogo} />
          <link rel="shortcut icon" href="favicon.ico"/>
        </Helmet>
      </div>
    )
  }
}
