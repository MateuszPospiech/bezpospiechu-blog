module.exports = {
  siteMetadata: {
    title: `BezPospiechu blog podróżniczy z opisem wydatków, miejsc i atrakcji.`,
    description: `Jeżeli chcesz zobaczyć moje podróże wraz z kosztorysem to serdecznie zapraszam. `,
    author: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-catch-links`,
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/pages`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: 'gatsby-plugin-mailchimp',
      options: {
          endpoint: 'https://bezpospiechu.us4.list-manage.com/subscribe/post?u=86e2ca4f906e8eb5fbd9acaad&amp;id=e54338eadc',
      },
    },
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: "GTM-5NZ3G43",
        includeInDevelopment: false,
      },
    },
    {
      resolve: 'gatsby-plugin-htaccess',
      options: {
        https: true,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-dark-mode`,
  ],
}
