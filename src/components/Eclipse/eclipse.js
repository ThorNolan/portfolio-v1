import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Particles from "react-tsparticles"
import Parallax from "parallax-js"

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
      <ul ref={sceneEl} id="landing">
        <li data-depth="0.0" data-friction-x="0.1" data-friction-y="0.1" className="layer"></li>
        <li data-depth="0.05" data-friction-x="0.1" data-friction-y="0.1" className="layer">
          <StaticImage 
            loading="eager"
            src="../../images/stars-even-smaller.png"
            alt=""
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
          />
        </li>
        <li data-depth="0.09" data-friction-x="0.1" data-friction-y="0.1" className="layer">
          <StaticImage 
            loading="eager"
            src="../../images/stars-smallest.png"
            alt=""
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
          />
        </li>
        <li data-depth="0.15" data-friction-x="0.1" data-friction-y="0.1" className="layer">
          <StaticImage 
            id="stars-bg"
            loading="eager"
            src="../../images/stars-01.png"
            alt=""
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
          />
        </li>
        <li data-depth="0.2" data-friction-x="0.1" data-friction-y="0.1" className="layer">
          <StaticImage
            id="stars-bg-2"
            loading="eager"
            src="../../images/stars-02.png"
            alt=""
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
          />
        </li>
        <li data-depth="0.30" data-friction-x="0.1" data-friction-y="0.1" className="particle-container layer">
          <Particles
            width={"100%"}
            height={"100%"}
            init={particlesInit}
            loaded={particlesLoaded}
            options={particleConfig}
          />
        </li>
        <li data-depth="0.55" data-friction-x="0.1" data-friction-y="0.1" id="sun-container" className="layer">
          <StaticImage
            id="sun"
            loading="eager"
            src="../../images/flat-sun.png"
            alt="A shining sun with text: portfolio"
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
          />
        </li>
        <li data-depth="0.80" data-friction-x="0.1" data-friction-y="0.1" id="moon-container" className="layer">
          <StaticImage
            id="eclipsed"
            loading="eager"
            src="../../images/new-eclipsed-moon.png"
            alt="Eclipsed moon with text: Thor Nolan, full-stack web developer and designer"
            quality={95} formats={["AUTO", "WEBP", "AVIF"]}
          />
        </li>
      </ul>
    </div>
  )
}

export default Eclipse
