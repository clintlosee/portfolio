require('dotenv').config({
  path: `.env.${process.env.WEATHER_API_KEY}`
});

module.exports = {
  siteMetadata: {
    title: 'Clint Losee Digital Portfolio',
    description:
      'The digital portfolio site for Clint Losee, a front end software engineer/developer and landscape photographer from Utah!',
    siteUrl: 'https://clintlosee.me'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
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
    },
    `gatsby-plugin-netlify` // make sure to put last in the array
  ]
};
