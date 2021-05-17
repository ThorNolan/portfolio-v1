import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Particles from "react-tsparticles";

import Layout from "../components/layout"
import Seo from "../components/seo"

import "../assets/css/main.css"
import particleConfig from "./particleConfig.js"


class IndexPage extends React.Component {
  constructor(props) {
    super(props);

    this.particlesInit = this.particlesInit.bind(this);
    this.particlesLoaded = this.particlesLoaded.bind(this);
  }

  particlesInit(main) {
    console.log(main);
  }

  particlesLoaded(container) {
    console.log(container);
  }

  render() {
    return (
      <Layout>
        <Seo title="Home" />
        <div id="particles-js" className="page-content">
          <div id="landing">
            <Particles
              width={"100vw"}
              height={"100vh"}
              data-relative-input="true" 
              data-clip-relative-input="true" 
              id="scene"
              init={this.particlesInit}
              loaded={this.particlesLoaded}
              options={particleConfig}
            />
            <div data-depth="0.2">
              <StaticImage id="sun" src="../images/flat-sun.png" alt="A shining sun with text: portfolio" quality={95} formats={["AUTO", "WEBP", "AVIF"]}/>
            </div>
            <div data-depth="0.8">
              <StaticImage id="eclipsed" src="../images/new-eclipsed-moon.png" alt="Eclipsed moon with text: Thor Nolan, full-stack web developer and designer" quality={95} formats={["AUTO", "WEBP", "AVIF"]}/>
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}

export default IndexPage
