module.exports = {
  siteMetadata:{
    title: `Agustinus Nathaniel`,
    description: `Tech and Design enthusiast.`,
    author: `sozonome`,
    siteUrl: `https://agustinusnathaniel.com`, // Domain of your site. No trailing slash!
    social:{
      youtube: `AgustinusNathaniel`,
      linkedin: `agustinusnathaniel`,
      github: `sozonome`,
      devto: `sozonome`,
      twitter: `sozonome`,
      instagram: `agustinusnathaniel`,
      unsplash: `@agustinusnathaniel`,
      medium: `@agustinusnathaniel`,
      behance: `agustinusnathaniel`,
      dribbble: `agustinusnathaniel`,
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
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Agustinus Nathaniel",
        short_name: "AgustinusNathaniel",
        start_url: "/",
        background_color: "#FFFFFF",
        theme_color: "#222222",
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: "standalone",
        icon: "src/images/coconate.png", // This path is relative to the root of the site.
        // An optional attribute which provides support for CORS check.
        // If you do not provide a crossOrigin option, it will skip CORS for manifest.
        // Any invalid keyword or empty string defaults to `anonymous`
        crossOrigin: `use-credentials`,
      },
    },
    `gatsby-plugin-offline`,
  ],
}
