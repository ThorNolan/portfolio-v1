import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
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