import * as React from "react"
import PropTypes from "prop-types"
import Link from "gatsby-plugin-transition-link"
// import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"


const Header = (props) => {

  return (
  <header>
    <div id="navigation">
      <nav id="page-top">
        <div className="container">
          <div>
            <Link 
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
            </Link>
            <ul id="links">
              <li>
                <Link 
                  to="/"
                  activeClassName="active"
                >
                  <span>HOME</span>
                </Link>
              </li>
              <li>
                <Link 
                  to="/about/"
                  activeClassName="active"
                  partiallyActive={true}
                >
                  <span>ABOUT</span>
                </Link>
              </li>
              <li>
                <Link 
                  to="/work/"
                  activeClassName="active"
                  partiallyActive={true}
                >
                  <span>WORK</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
