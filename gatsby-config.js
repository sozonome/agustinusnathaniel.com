const config = require('./config/website')

const pathPrefix = config.pathPrefix === '/' ? '' : config.pathPrefix

module.exports = {
  siteMetadata:{
    siteUrl: config.siteUrl + pathPrefix,
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-typescript`,
  ],
  {
    resolve: `gatsby-plugin-google-analytics`,
    options: {
      trackingId: config.googleAnalyticsID,
    }
  }
}
