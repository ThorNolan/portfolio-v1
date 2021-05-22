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
      resolve: `gatsby-plugin-scroll-reveal`,
      options: {
          threshold: 1, // Percentage of an element's area that needs to be visible to launch animation
          once: true, // Defines if animation needs to be launched once
          disable: false, // Flag for disabling animations
          animateClassName: 'sal-animate', // Class name which triggers animation
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
    `@material-ui/core`,
    `@material-ui/icons`,
    `gatsby-plugin-gatsby-cloud`,
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        precachePages: [`./*`],
      },
    },
  ],
}
