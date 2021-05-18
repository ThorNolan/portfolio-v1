import * as React from "react"

import Layout from "../components/Wrapper/layout.js"
import Seo from "../components/Wrapper/seo.js"

const About = () => (
  <Layout>
    <Seo title="About" />
    <section className="section page-content" id="about-me">
    <div className="container">
      <h4 className="center"><span>ABOUT ME</span></h4>

      <div className="row about-text">

        <div className="col s12 m12 l3 pic-container center-align">
          <img id="mainPicture" className="center circle responsive-img" src="../images/alt-profile-pic.jpg" alt="Thor Nolan standing behind a sunflower" />
        </div>

        <div className="col s12 m12 l9">

          <p className="flow-reveal" id="intro">I'm Thor, a web developer and designer living in
            the Bay Area, CA. I graduated from Reed College in 2016 and recently completed UC Berkeley
            Extension's full-stack coding bootcamp. I'm a passionate learner, and always looking for new ways to expand my knowledge and skill-set.</p>
          <br />
          <p className="flow-reveal">I'm interested in technology, design, philosophy, politics, teaching, and
            writing. I appreciate being able to work closely and creatively with people to come up with ideal strategies and solutions.</p>
          <br />
          <p className="flow-reveal">When I'm not coding, I like to rock climb at my local climbing gym. I love to travel, and have spent significant
            time living and exploring in other countries. I also built my desktop PC that I use for playing games or working
            with 3D rendering software like the Unity engine.</p>
          <br />
          <p className="flow-reveal">I am available for freelance work, so if you have a web project that's still in the idea phase <a href="mailto:tnolan5764@gmail.com" id="email" name="tnolan5764@gmail.com">send me an email</a> and we can get started!</p>
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

      <div className="testimonial">
        <p><span>"Fast, affordable, and true to our specifications. Thor took our very old office site and dragged it into the 21st Century adding analytics, making it mobile-friendly, polishing the look and feel, but keeping it simple, as requested. It was like a window-washing in an old house you just can't leave. On another site, Thor supplied us with spot-on guidance to build a site aimed at eliciting public response for a study project. We love his fast, efficient, time on task service."</span> — Brancart & Brancart, client</p>
      </div>

      <h4 className="center"><span>SKILLS</span></h4>

      <div className="skills">
        <div className="skills-wrapper">
          <div className="skills1 box">
            <div className="wave wave-one"></div>
            <ul className="list-skills">
              <li><i className="material-icons tiny">keyboard_arrow_right</i> React.js </li>
              <li><i className="material-icons tiny">keyboard_arrow_right</i> Semantic HTML5 </li>
              <li><i className="material-icons tiny">keyboard_arrow_right</i> CSS3 and SCSS</li>
              <li><i className="material-icons tiny">keyboard_arrow_right</i> Javascript ES6/7+ </li>
              <li><i className="material-icons tiny">keyboard_arrow_right</i> jQuery </li>
              <li><i className="material-icons tiny">keyboard_arrow_right</i> Bootstrap and Materialize </li>
            </ul>
          </div>

          <div className="skills2 box">
            <div className="wave wave-two"></div>
            <ul className="list-skills">
              <li><i className="material-icons tiny">keyboard_arrow_right</i> Node.js </li>
              <li><i className="material-icons tiny">keyboard_arrow_right</i> NPM and a variety of packages </li>
              <li><i className="material-icons tiny">keyboard_arrow_right</i> Express routing </li>
              <li><i className="material-icons tiny">keyboard_arrow_right</i> MySQL (with Sequelize) </li>
              <li><i className="material-icons tiny">keyboard_arrow_right</i> MongoDB (with Mongoose) </li>
              <li><i className="material-icons tiny">keyboard_arrow_right</i> Working with RESTful API's </li>
            </ul>
          </div>

          <div className="skills3 box">
            <div className="wave wave-three"></div>
            <ul className="list-skills">
              <li><i className="material-icons tiny">keyboard_arrow_right</i> Proficient with Squarespace, Wordpress, and other CMS's</li>
              <li><i className="material-icons tiny">keyboard_arrow_right</i> Git/Github branching and workflow </li>
              <li><i className="material-icons tiny">keyboard_arrow_right</i> Adobe XD/Figma prototyping </li>
              <li><i className="material-icons tiny">keyboard_arrow_right</i> Agile methodologies</li>
              <li><i className="material-icons tiny">keyboard_arrow_right</i> Writing and research </li>
            </ul>
          </div>
        </div>

      </div>
    </div>
  </section>
  </Layout>
)

export default About
