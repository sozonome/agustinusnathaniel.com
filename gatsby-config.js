module.exports = {
  siteMetadata:{
    title: `Agustinus Nathaniel`,
    description: `Personal Site build with Gatsby + SASS + Typescript 💪`,
    author: `sozonome`,
    siteUrl: `https://agustinusnathaniel.com`, // Domain of your site. No trailing slash!
    social:{
      instagram: `nate_228`,
      youtube: `AgustinusNathaniel`,
      linkedin: `agustinusnathaniel`,
      github: `sozonome`,
      unsplash: `@nate_228`,
      medium: `@nate_228`,
      behance: `nate_228`,
      dribbble: `nate_228`,
      email: `hello@agustinusnathaniel.com`
    },
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-typescript`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-89527004-1`,
      }
    },
    {
      resolve: `gatsby-source-rss-feed`,
      options: {
        url: `https://medium.com/feed/@agustinusnathaniel`,
        name: `GatsbyBlog`,
      }
    },
  ],
}
