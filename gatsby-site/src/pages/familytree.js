import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import MainContainer from "../components/main-container"

import CenteredTree from "../components/centered-tree"

const data = require("../json/familytree.json")

const FamilyTree = () => (
  <CenteredTree data={data} />
  /* <Layout title="Family Tree">
    <MainContainer className="gradient">
      <Tree data={data} />
    </MainContainer>
    <Link to="/">Go back to the homepage</Link>
  </Layout> */
)

export default FamilyTree
