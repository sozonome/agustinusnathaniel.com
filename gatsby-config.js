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
  ],
}
