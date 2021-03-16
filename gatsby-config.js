require("dotenv").config()

module.exports = {
  siteMetadata: {
    title: `Gatsby x Cloudinary Blog`,
    description: `Blog built with Gatsby and Cloudinary using the gatsby-transformer-cloudinary plugin`,
    author: `@gatsbyjs`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog-posts`,
        path: `${__dirname}/src/blog-posts`
      }
    },
    `gatsby-transformer-remark`,
    `@chakra-ui/gatsby-plugin`,
    // required to create a PWA
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png` // This path is relative to the root of the site.
      }
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ]
}
