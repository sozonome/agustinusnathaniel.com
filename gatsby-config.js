module.exports = {
  siteMetadata:{
    title: `Agustinus Nathaniel`,
    description: `Personal Site build with Gatsby + SASS + Typescript 💪`,
    author: `sozonome`,
    siteUrl: `https://agustinusnathaniel.com`, // Domain of your site. No trailing slash!
    social:{
      youtube: `AgustinusNathaniel`,
      linkedin: `agustinusnathaniel`,
      github: `sozonome`,
      devto: `sozonome`,
      twitter: `sozonome`,
      instagram: `nate_228`,
      unsplash: `@nate_228`,
      medium: `@nate_228`,
      behance: `nate_228`,
      dribbble: `nate_228`,
      email: `hello@agustinusnathaniel.com`,
      spotify_podcast: `https://open.spotify.com/show/0ORzchlOopGccuNlQ5SAyy`,
      apple_podcast: `https://podcasts.apple.com/id/podcast/decompiling-fruits/id1452637576`,
      spotify_playlist: `https://open.spotify.com/user/214cjghp4c3lzsygqz73qvuxi`,
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
        name: `MyBlog`,
      }
    },
  ],
}
