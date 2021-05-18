import * as React from "react"

import Layout from "../components/Layout/layout.js"
import Seo from "../components/Layout/seo.js"
import Eclipse from "../components/Eclipse/eclipse"

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