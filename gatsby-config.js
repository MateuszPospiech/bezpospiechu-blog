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
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Bez Pośpiechu blog`,
        short_name: `Posp`,
        start_url: `/`,
        lang: `pl`,
        background_color: `#ffffff`,
        theme_color: `#0056b3`,
        display: `standalone`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
        icons: [
          {
            "src": "icons/icon-48x48.png",
            "sizes": "48x48",
            "type": "image/png"
          },
          {
            "src": "icons/icon-72x72.png",
            "sizes": "72x72",
            "type": "image/png"
          },
          {
            "src": "icons/icon-96x96.png",
            "sizes": "96x96",
            "type": "image/png"
          },
          {
            "src": "icons/icon-144x144.png",
            "sizes": "144x144",
            "type": "image/png"
          },
          {
            "src": "icons/icon-192x192.png",
            "sizes": "192x192",
            "type": "image/png"
          },
          {
            "src": "icons/icon-256x256.png",
            "sizes": "256x256",
            "type": "image/png"
          },
          {
            "src": "icons/icon-384x384.png",
            "sizes": "384x384",
            "type": "image/png"
          },
          {
            "src": "icons/icon-512x512.png",
            "sizes": "512x512",
            "type": "image/png"
          }
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-offline',
      options: {
        workboxConfig: {
          globPatterns: ['**/*']
        },
        precachePages: ['**/*'],
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-dark-mode`,
  ],
}
