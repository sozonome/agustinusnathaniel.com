const tailwind = require('../tailwind')

module.exports = {
  pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "/portfolio"

  siteTitle: 'Agustinus Nathaniel - Personal Site', // Navigation and Site Title
  siteTitleAlt: 'nate_228', // Alternative Site title for SEO
  siteTitleShort: 'nate', // short_name for manifest
  siteHeadline: 'Learn, Create, and Connect.', // Headline for schema.org JSONLD
  siteUrl: 'https://agustinusnathanie.com', // Domain of your site. No trailing slash!
  siteLanguage: 'en', // Language Tag on <html> element
  siteLogo: '/logo.png', // Used for SEO and manifest
  siteDescription: 'Agustinus Nathaniel\'s Personal Site',
  author: 'sozonome', // Author for schema.org JSONLD

  // siteFBAppID: '123456789', // Facebook App ID - Optional
  userTwitter: '@sozonome', // Twitter Username
  ogSiteName: '', // Facebook Site Name
  ogLanguage: 'en_US', // Facebook Language
  googleAnalyticsID: 'UA-89527004-1',

  // Manifest and Progress color
  themeColor: tailwind.colors.orange,
  backgroundColor: tailwind.colors.blue,
}
