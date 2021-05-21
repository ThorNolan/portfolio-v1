import * as React from "react"

import Seo from "../components/Wrapper/seo.js"
import Eclipse from "../components/Eclipse/eclipse.js"

class IndexPage extends React.Component {

  render() {
    return (
      <>
        <Seo title="Home" />
        <Eclipse />
      </>
    )
  }
}

export default IndexPage