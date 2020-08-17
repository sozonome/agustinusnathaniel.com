const { siteMetadata } = require("./data/siteConfig")

module.exports = {
  siteMetadata: {
    title: siteMetadata.title,
    description: siteMetadata.description,
    author: siteMetadata.author,
    siteUrl: siteMetadata.siteUrl, // Domain of your site. No trailing slash!
    social: {
      youtube: siteMetadata.social.youtube,
      linkedin: siteMetadata.social.linkedin,
      twitter: siteMetadata.social.twitter,
      instagram: siteMetadata.social.instagram,
      medium: siteMetadata.social.medium,
      behance: siteMetadata.social.behance,
      email: siteMetadata.social.email,
      spotify: siteMetadata.social.spotify,
      spotify_podcast: siteMetadata.social.spotify_podcast,
      apple_podcast: siteMetadata.social.apple_podcast,
      spotify_playlist: siteMetadata.social.spotify_playlist,

      github: siteMetadata.social.github,
      devto: siteMetadata.social.devto,
      indiehackers: siteMetadata.social.indiehackers,
      devInstagram: siteMetadata.social.devInstagram,
      codersrank: siteMetadata.social.codersrank,
      npmjs: siteMetadata.social.npmjs,
      stackshare: siteMetadata.social.stackshare,
      devrant: siteMetadata.social.devrant,
      codesandbox: siteMetadata.social.codesandbox,
      freeCodeCamp: siteMetadata.social.freeCodeCamp,
      devSite: siteMetadata.social.devSite,
      producthunt: siteMetadata.social.producthunt,
    },
  },
  plugins: [
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [require("tailwindcss"), require("autoprefixer")],
      },
    },
    `gatsby-plugin-sass`,
    // `gatsby-plugin-typescript`,
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://agustinusnathaniel.com`,
        stripQueryString: true,
      },
    },

    /** RSS */
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: {site, allMarkdownRemark} }) => {
              return allMarkdownRemark.edges.map(edge => {
                return Object.assign({}, edge.node.frontmatter, {
                  description: edge.node.excerpt,
                  date: edge.node.frontmatter.date,
                  url: site.siteMetadata.siteUrl + edge.node.frontmatter.slug,
                  guid: site.siteMetadata.siteUrl + edge.node.frontmatter.slug,
                  custom_elements: [{ "content:encoded": edge.node.html }],
                })
              })
            },
            query: `
              {
                allMarkdownRemark(
                  sort: { order: DESC, fields: [frontmatter___date]},
                  filter: {
                    frontmatter:{
                      type:{
                        eq: "personal"
                      }
                      published:{
                        eq: true
                      }
                    }
                  }
                ) {
                  edges{
                    node{
                      excerpt
                      html
                      frontmatter{
                        title
                        date
                      }
                    }
                  }
                }
              }
            `,
            output: "/blogrss.xml",
            title: "Agustinus Nathaniel's RSS Feed",
            match: "^/blog/",
          },
          {
            serialize: ({ query: {site, allMarkdownRemark} }) => {
              return allMarkdownRemark.edges.map(edge => {
                return Object.assign({}, edge.node.frontmatter, {
                  description: edge.node.excerpt,
                  date: edge.node.frontmatter.date,
                  url: site.siteMetadata.siteUrl + edge.node.frontmatter.slug,
                  guid: site.siteMetadata.siteUrl + edge.node.frontmatter.slug,
                  custom_elements: [{ "content:encoded": edge.node.html }],
                })
              })
            },
            query: `
              {
                allMarkdownRemark(
                  sort: { order: DESC, fields: [frontmatter___date]},
                  filter: {
                    frontmatter:{
                      type:{
                        eq: "dev"
                      }
                      published:{
                        eq: true
                      }
                    }
                  }
                ) {
                  edges{
                    node{
                      excerpt
                      html
                      frontmatter{
                        title
                        date
                      }
                    }
                  }
                }
              }
            `,
            output: "/devrss.xml",
            title: "Agustinus Nathaniel's Dev Notes RSS Feed",
            match: "^/dev/",
          }
        ]
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/content/posts`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `projects`,
        path: `${__dirname}/content/projects`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `postImages`,
        path: `${__dirname}/content/images`,
      },
    },
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 800,
            },
          },
        ],
      },
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
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        printRejected: false,
        develop: false,
        tailwind: true,
      },
    },
  ],
}
