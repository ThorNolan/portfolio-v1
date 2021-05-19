import * as React from "react"
import PropTypes from "prop-types"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { StaticImage } from "gatsby-plugin-image"

const Header = () => (
  <header>
    <div className="navbar-fixed navigation">
      <nav id="page-top">
        <div className="container">
          <div className="nav-wrapper">
            <AniLink 
              fade 
              duration={2}
              to="/"
              title="Thor Nolan | Portfolio"
              id="logo-link"
            >
              <StaticImage 
                id="logo-image"
                src="../../images/new-improved-favicon-03.png"
                loading="eager" 
                alt="Thor Nolan Eclipse Logo"
                quality={95}
                formats={["AUTO", "WEBP", "AVIF"]}
              />
            </AniLink>
            <ul className="right valign-wrapper" id="links">
              <li className="top-nav" id="default">
                <AniLink 
                  fade
                  duration={2}
                  to="/"
                  bg="#07070D"
                >
                  <span>HOME</span>
                </AniLink>
              </li>
              <li className="top-nav">
                <AniLink 
                  fade
                  duration={2}
                  to="/about/"
                  bg="#1E203E"
                >
                  <span>ABOUT</span>
                </AniLink>
              </li>
              <li className="top-nav">
                <AniLink 
                  fade
                  duration={2}
                  to="/projects/"
                  bg="#1E203E"
                >
                  <span>PROJECTS</span>
                </AniLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
