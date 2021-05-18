import * as React from "react"

import Layout from "../components/Wrapper/layout.js"
import Seo from "../components/Wrapper/seo.js"
import Eclipse from "../components/Eclipse/eclipse.js"

import "../assets/css/main.css"

class IndexPage extends React.Component {

  render() {
    return (
      <Layout>
        <Seo title="Home" />
        <Eclipse />
      </Layout>
    )
  }
}

export default IndexPage