require('dotenv').config({
  path: `.env.${process.env.WEATHER_API_KEY}`
});

module.exports = {
  siteMetadata: {
    title: 'Clint Losee Digital Portfolio'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'clint-losee-digital-portfolio',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png' // This path is relative to the root of the site.
      }
    },
    'gatsby-plugin-offline',
    {
      resolve: 'gatsby-plugin-styled-components',
      options: {
        // add options here
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    }
  ]
};
