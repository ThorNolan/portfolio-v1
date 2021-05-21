module.exports = {
  siteMetadata: {
    title: `THOR NOLAN PORTFOLIO`,
    description: `Thor Nolan Portfolio | Full stack Developer & Creative Web Designer`,
    author: `Thor Nolan`,
    // siteURL: 'https://thornolan.com',
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
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
        layout: require.resolve(`${__dirname}/src/components/Wrapper/layout.js`),
      },
    },
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        implementation: require("node-sass"),
        additionalData: `@import "./src/scss/main.scss";`,
      },
    },
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `THOR NOLAN PORTFOLIO`,
        short_name: `@ThorNolan`,
        start_url: `/`,
        background_color: `#1D1F3C`,
        theme_color: `#1D1F3C`,
        display: `standalone`,
        icon: `src/images/new-improved-favicon-03.png`,
      },
    },
    `react-tsparticles`,
    `parallax-js`,
    `gsap`,
    `smooth-scroll`,
    `styled-components`,
    `node-sass`,
    `gatsby-plugin-gatsby-cloud`,
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        precachePages: [`./*`],
      },
    },
  ],
}
