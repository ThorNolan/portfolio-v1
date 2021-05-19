import * as React from "react"
 
const Footer = () => (
  <footer className="section page-footer black valign-wrapper">
    <div className="container center-align">
      <div className="center-align top-btn-container">
        <a 
          href="#top"
          className="back-to-top tooltipped"
          data-position="left"
          data-tooltip="Back to top"
          aria-label="Back to top"
        >
          <i className="fa fa-chevron-up fa-lg" />
        </a>
      </div>

      <ul className="footer-links center-align">
        <li>
          <a
            href="mailto:tnolan5764@gmail.com"
            id="email"
            className="tooltipped footer-a"
            data-position="bottom"
            data-tooltip="Send me an email"
            aria-label="Email: tnolan5764@gmail.com"
          >
            <i className="fa fa-at footer-icon fa-2x" />
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/ThorNolan"
            className="footer-a tooltipped"
            data-position="bottom"
            data-tooltip="Github"
            aria-label="Github"
          >
            <i className="fa fa-github footer-icon fa-2x" />
          </a>
        </li>
        <li>
          <a 
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/thornolan/"
            className="footer-a tooltipped"
            data-position="bottom"
            data-tooltip="LinkedIn"
            aria-label="LinkedIn"
          >
            <i className="fa fa-linkedin footer-icon fa-2x" />
          </a>
        </li>
      </ul>

      <p>Made with <i className="fa fa-heart" /> by Thor Nolan {new Date().getFullYear()}</p>
    </div>
  </footer>
)

export default Footer
 