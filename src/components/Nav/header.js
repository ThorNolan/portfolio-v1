import * as React from "react"
import PropTypes from "prop-types"
import AniLink from "gatsby-plugin-transition-link/AniLink";
import { StaticImage } from "gatsby-plugin-image"

const Header = () => (
  <header>
    <div className="navbar-fixed navigation">
      <nav>
        <div className="container">
          <div className="nav-wrapper">
            <AniLink swipe direction="up" to="/" title="Thor Nolan | Portfolio" id="logo-link">
              <StaticImage id="logo-image" src="../../images/new-improved-favicon-03.png" loading="eager" alt="Thor Nolan Eclipse Logo" quality={95} formats={["AUTO", "WEBP", "AVIF"]} />
            </AniLink>
            <ul className="right valign-wrapper" id="links">
              <li className="top-nav" id="default">
                <AniLink swipe direction="up" to="/"><span>HOME</span></AniLink>
              </li>
              <li className="top-nav">
                <AniLink swipe direction="up" to="/about/"><span>ABOUT</span></AniLink>
              </li>
              <li className="top-nav">
                <AniLink swipe direction="up" to="/projects/"><span>PROJECTS</span></AniLink>
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
