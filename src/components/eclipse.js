import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Particles from "react-tsparticles"
import Parallax from 'parallax-js'

import particleConfig from "./particleConfig.js"

const Eclipse = () => {
  const sceneEl = React.useRef(null);

  React.useEffect(() => {
    const parallaxInstance = new Parallax(sceneEl.current, {
      relativeInput: true,
      clipRelativeInput: true,
    })

    parallaxInstance.enable();

    return () => parallaxInstance.disable();
  }, [])

  const particlesInit = React.useCallback(
    () => {
      console.log('Click happened');
    },
    [],
  );

  const particlesLoaded = React.useCallback(
    () => {
      console.log('Click happened');
    },
    [],
  );

  return (
    <div>
      <div ref={sceneEl} id="landing">
        <div data-depth="0.1" data-friction-x="0.1" data-friction-y="0.1">
          <Particles
            width={"100vw"}
            height={"150vh"}
            init={particlesInit}
            loaded={particlesLoaded}
            options={particleConfig}
          />
        </div>
        <div data-depth="0.2" data-friction-x="0.1" data-friction-y="0.1">
          <Particles
            width={"100vw"}
            height={"150vh"}
            init={particlesInit}
            loaded={particlesLoaded}
            options={particleConfig}
          />
        </div>
        <div data-depth="0.4" data-friction-x="0.1" data-friction-y="0.1" id="sun-container">
          <StaticImage id="sun" loading="eager" src="../images/flat-sun.png" alt="A shining sun with text: portfolio" quality={95} formats={["AUTO", "WEBP", "AVIF"]}/>
        </div>
        <div data-depth="0.8" data-friction-x="0.1" data-friction-y="0.1" id="moon-container">
          <StaticImage id="eclipsed" loading="eager" src="../images/new-eclipsed-moon.png" alt="Eclipsed moon with text: Thor Nolan, full-stack web developer and designer" quality={95} formats={["AUTO", "WEBP", "AVIF"]}/>
        </div>
      </div>
    </div>
  )
}

export default Eclipse
