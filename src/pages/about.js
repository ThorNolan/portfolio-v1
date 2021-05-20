import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

import Seo from "../components/Wrapper/seo.js"

const About = () => (
  <>
    <Seo title="About" />
    <section className="section page-content" id="about-me">
      <div className="container">
        <div className="about-row">
          <div id="profile-pic">
            <StaticImage 
              loading="eager"
              src="../images/profile-pic.jpg"
              alt="Thor Nolan smiling, sitting in a house made of driftwood"
              quality={95}
              formats={["AUTO", "WEBP", "AVIF"]}
            />
          </div>

          <div className="about-text">
            <p id="intro">I'm Thor, a web developer and designer based in
              the Bay Area, CA. I focus on front end development, and appreciate any opportunity to hone my craft and bring my creativity to interesting projects.
              I like collaborating with people to come up with ideal strategies and solutions.</p>
            <br />
            <p>When I'm not coding, I like to climb at my local climbing gym, and I love to travel whenever I can. I'm interested in technology, politics, philosophy, teaching, 
              and everything about this beautiful planet we live on. I also built my desktop PC that I use for playing games, designing things in Illustrator, and working with 3D rendering software like the Unity engine.</p>
            <br />
            <p>I'm sometimes available for freelance work, so if you have a web project you'd like to work together on <a href="mailto:tnolan5764@gmail.com" id="email" name="tnolan5764@gmail.com">send me an email</a> and we can chat about it.</p>
            <br />
            <div className="center-align resume-container">
              <a href="assets/images/resume.pdf" target="_blank">
                <svg height="60" width="320" xmlns="http://www.w3.org/2000/svg">
                  <rect className="border-animate" height="60" width="320" />
                </svg>

                <span className="outlined-text">→ my resume</span>
              </a>  
            </div>
          </div>

        </div>

      </div>

      <h4 className="center">
        <span>WHAT I BRING TO THE TABLE</span>
      </h4>

      <div id="skills">
        <div className="skills-wrapper">
          <div className="skills1 box">
            <div className="wave wave-one"></div>
            <ul className="list-skills">
              <li><i className="material-icons tiny">keyboard_arrow_right</i> React.js/Redux (and Gatsby) </li>
              <li><i className="material-icons tiny">keyboard_arrow_right</i> Semantic HTML5 </li>
              <li><i className="material-icons tiny">keyboard_arrow_right</i> CSS3 and SCSS </li>
              <li><i className="material-icons tiny">keyboard_arrow_right</i> Javascript ES6/7+ </li>
              <li><i className="material-icons tiny">keyboard_arrow_right</i> Webpack, GraphQL </li>
              <li><i className="material-icons tiny">keyboard_arrow_right</i> Git branching and workflow </li>
            </ul>
          </div>

          <div className="skills2 box">
            <div className="wave wave-two"></div>
            <ul className="list-skills">
              <li><i className="material-icons tiny">keyboard_arrow_right</i> Node.js </li>
              <li><i className="material-icons tiny">keyboard_arrow_right</i> NPM and many, many packages </li>
              <li><i className="material-icons tiny">keyboard_arrow_right</i> Express server </li>
              <li><i className="material-icons tiny">keyboard_arrow_right</i> Working with RESTful API's </li>
              <li><i className="material-icons tiny">keyboard_arrow_right</i> ESlint, smoke/unit testing</li>
              <li><i className="material-icons tiny">keyboard_arrow_right</i> Agile methodologies </li>
            </ul>
          </div>

          <div className="skills3 box">
            <div className="wave wave-three"></div>
            <ul className="list-skills">
              <li><i className="material-icons tiny">keyboard_arrow_right</i> Proficient with Wordpress, Squarespace, and other CMS's </li>
              <li><i className="material-icons tiny">keyboard_arrow_right</i> Bootstrap, Materialize, many libraries and frameworks </li>
              <li><i className="material-icons tiny">keyboard_arrow_right</i> Adobe XD/Figma prototyping </li>
              <li><i className="material-icons tiny">keyboard_arrow_right</i> Adobe Illustrator </li>
              <li><i className="material-icons tiny">keyboard_arrow_right</i> Writing and research </li>
            </ul>
          </div>
        </div>

      </div>
    </section>
  </>
)

export default About
