module.exports = {
  siteMetadata: {
    title: 'Ryan Baumgardner Portfolio',
    desc: 'Developer portfolio site',
  },
  pathPrefix: '/portfolio-site',
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'image',
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-plugin-glamor',
    'gatsby-plugin-glamorous',
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: `src/utils/typography.js`,
      },
    },
  ],
};
