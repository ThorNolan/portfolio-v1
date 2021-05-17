import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Header = () => (
  <header>
    <div className="navbar-fixed navigation">
      <nav className="black">
        <div className="container">
          <div className="nav-wrapper">
            <Link id="logo-link"  to="/" title="Thor Nolan | Portfolio">
              <StaticImage id="logo-image" src="../images/new-improved-favicon-03.png" loading="eager" alt="Thor Nolan Eclipse Logo" quality={95} formats={["AUTO", "WEBP", "AVIF"]} />
            </Link>
            <ul className="right valign-wrapper" id="links">
              <li className="top-nav" id="default">
                <Link className="scroll" id="default" to="/"><span>HOME</span></Link>
              </li>
              <li className="top-nav">
                <Link className="scroll" to="/page-2/">ABOUT</Link>
              </li>
              <li className="top-nav">
                <Link className="scroll" to="/page-2/">PROJECTS</Link>
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
