import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { Helmet } from "react-helmet"
import { useLocation } from "@reach/router"

import Preloader from "./preloader"
import Header from "../Nav/header"
import Footer from "../Nav/footer"
import "./layout.css"

if (typeof window !== "undefined") {
  // eslint-disable-next-line global-require
  require("smooth-scroll")('a[href*="#"]')
}

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  const { href } = useLocation();

  React.useEffect(() => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'})
  }, [data])

  return (
    <>
      <Helmet>
        {/* <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.100.2/css/materialize.min.css" /> */}
        <link href="https://fonts.googleapis.com/css?family=Montserrat:300,400,500|Roboto:400,500,500i,700,700i&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
        <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous" />
      </Helmet>
      <Header siteTitle={data.site.siteMetadata?.title || `THOR NOLAN PORTFOLIO`} location={href} />
      <Preloader />
      <div id="top">
        <main>{children}</main>
      </div>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
