module.exports = {
  siteMetadata: {
    siteUrl: 'https://sneyder.net/',
    description: `Personal website of Sneyder Thomas Angulo Soto, software developer based in Venezuela.`,
    author: {
      name: "Sneyder Angulo",
      twitter: `@sneyderHack`
    },
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-plugin-netlify`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Sneyder Angulo - Software developer`,
        short_name: `Sneyder Angulo`,
        start_url: `/`,
        background_color: `#02044a`,
        theme_color: `#02044a`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-plugin-i18n',
      options: {
        langKeyForNull: 'en',
        langKeyDefault: 'en',
        useLangKeyLayout: true,
        prefixDefault: false
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-fontawesome-css`,
    `gatsby-plugin-typescript`
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
