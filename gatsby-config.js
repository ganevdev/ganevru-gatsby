module.exports = {
  siteMetadata: {
    title: 'Ivan Ganev',
    siteUrl: 'https://ganev.ru',
    description: 'Ivan Ganev - personal site'
  },
  pathPrefix: '/',
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages'
      }
    },
    {
      resolve: 'gatsby-plugin-google-tagmanager',
      options: {
        id: 'GTM-MWQ6LRR'
      }
    },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    `gatsby-plugin-typescript`
  ]
};
