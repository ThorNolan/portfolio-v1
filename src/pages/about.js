import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Fade } from "react-awesome-reveal";

import Seo from "../components/Wrapper/seo.js"
import WaveSkills from "../components/WaveSkills/waveSkills.js"
import "./about.scss"

const About = () => (
  <>
    <Seo title="About" />
    <section className="section page-content" id="about-me">
      <div className="container">
      <Fade direction="up" duration={900}>
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
            <p>I'm sometimes available for freelance work, so if you have a project you'd
              like to work together on <a href="mailto:tnolan5764@gmail.com" id="email" name="tnolan5764@gmail.com">send me an email</a> and we can chat about it.</p>
            <br />
            <p><span role="img" aria-label="wave">🌊</span></p>
            <Fade delay={500} duration={800}>
              <div className="center-align resume-container">
                <a href="assets/images/resume.pdf" target="_blank">
                  <svg height="60" width="320" xmlns="http://www.w3.org/2000/svg">
                    <rect className="border-animate" height="60" width="320" />
                  </svg>

                  <span className="outlined-text">→ my resume</span>
                </a>  
              </div>
            </Fade>
          </div>

        </div>
      </Fade>
      </div>
      <div>
        <Fade direction="up" duration={1000} delay={1000}>
          <h4>
            <span>WHAT I BRING TO THE TABLE</span>
          </h4>
        </Fade>
        <WaveSkills />
      </div>
    </section>
  </>
)

export default About
