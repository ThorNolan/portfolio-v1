module.exports = {
  siteMetadata: {
    title: `THOR NOLAN PORTFOLIO`,
    description: `Thor Nolan Portfolio | Full-stack Web Developer & Designer`,
    author: `Thor Nolan`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `react-tsparticles`,
    `parallax-js`,
    `gsap`,
    `smooth-scroll`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-transition-link`,
      options: {
        layout: require.resolve(`./src/components/Wrapper/layout.js`),
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `THOR NOLAN PORTFOLIO`,
        short_name: `@ThorNolan`,
        start_url: `/`,
        background_color: `#1D1F3C`,
        theme_color: `#1D1F3C`,
        display: `minimal-ui`,
        icon: `src/images/new-improved-favicon-03.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
