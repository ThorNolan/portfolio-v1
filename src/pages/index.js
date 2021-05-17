import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Eclipse from "../components/eclipse"

import "../assets/css/main.css"

class IndexPage extends React.Component {
  constructor(props) {
    super(props);
  }

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
