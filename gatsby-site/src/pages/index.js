import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import MainContainer from "../components/main-container"

// import BackgroundImage from "../images/events.jpg"

const IndexPage = () => {
  const title = "Home";
  return (
    <Layout title={title}> 
        <MainContainer>
        <Link to="/familytree/">Go to page 2</Link>
        </MainContainer>
      
    </Layout>
  )
}

export default IndexPage
