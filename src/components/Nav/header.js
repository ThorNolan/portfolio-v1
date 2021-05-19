import * as React from "react"
import PropTypes from "prop-types"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { StaticImage } from "gatsby-plugin-image"

const Header = () => (
  <header>
    <div className="navbar-fixed navigation">
      <nav id="page-top">
        <div className="container">
          <div>
            <AniLink 
              fade 
              to="/"
              duration={2}
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
              <li>
                <AniLink 
                  fade
                  to="/"
                  duration={2}
                  activeClassName="active"
                >
                  <span>HOME</span>
                </AniLink>
              </li>
              <li>
                <AniLink 
                  fade
                  to="/about/"
                  duration={2}
                  activeClassName="active"
                >
                  <span>ABOUT</span>
                </AniLink>
              </li>
              <li>
                <AniLink 
                  fade
                  to="/projects/"
                  duration={2}
                  activeClassName="active"
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
