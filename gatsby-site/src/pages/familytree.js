import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import PageHeader from "../components/page-header"
import MainContainer from "../components/main-container"
import CenteredTree from "../components/centered-tree"

const data = require("../json/familytree.json")

const FamilyTree = () => (
  <Layout title="Family Tree">
    <PageHeader
      title={"Family Tree"}
      imageURL={require("../images/Taiwan.jpg")}
    />
    <MainContainer className="gradient">
      <CenteredTree data={data} />
    </MainContainer>
  </Layout>
)

export default FamilyTree
