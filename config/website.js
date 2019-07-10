const tailwind = require('../tailwind')

module.exports = {
  pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "/portfolio"

  siteTitle: 'Agustinus Nathaniel', // Navigation and Site Title
  siteTitleAlt: 'nate_228', // Alternative Site title for SEO
  siteTitleShort: 'nathan', // short_name for manifest
  siteHeadline: 'Agustinus Nathaniel\'s Personal Site', // Headline for schema.org JSONLD
  siteUrl: 'https://agustinusnathaniel.com', // Domain of your site. No trailing slash!
  siteLanguage: 'en', // Language Tag on <html> element
  siteLogo: '/logo.png', // Used for SEO and manifest
  siteDescription: 'Playful & Colorful One-Page website with Parallax effect',
  author: 'Agustinus Nathaniel', // Author for schema.org JSONLD

  // siteFBAppID: '123456789', // Facebook App ID - Optional
  userTwitter: '@sozonome', // Twitter Username
  ogSiteName: 'nate_228', // Facebook Site Name
  ogLanguage: 'en_US', // Facebook Language
  googleAnalyticsID: '',

  // Manifest and Progress color
  themeColor: tailwind.colors.teal,
  backgroundColor: tailwind.colors.orange,
}
