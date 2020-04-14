module.exports = {
  siteMetadata: {
    title: `Marrying Martinsen`,
    description: `Savannah Grace Harper & Joseph Michael Martinsen's Wedding`,
    author: `@nbahoopstar`,
    url: `https://marrying.martinsen.com`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
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
        name: `Marrying Martinsen`,
        short_name: `Marrying Martinsen`,
        start_url: `/`,
        background_color: `#FFFFFF`,
        theme_color: `#4a4a4a`,
        display: `standalone`,
        icon: `src/images/MarryinMartinsenFacIcon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-sass`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        google: {
          families: ["Pinyon Script", "Cormorant Garamond"],
        },
      },
    },
  ],
}
