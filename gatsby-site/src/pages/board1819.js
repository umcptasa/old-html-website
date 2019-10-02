import React from "react"

import Layout from "../components/layout"
import PageHeader from "../components/page-header"
import MainContainer from "../components/main-container"
const title = "Board 18-19"

const Board1819 = () => (
    
  <Layout title={title}>
    <PageHeader
      title={title}
      imageURL={require("../images/Taiwan.jpg")}
    />
    <MainContainer>
    </MainContainer>
  </Layout>
)

export default Board1819
