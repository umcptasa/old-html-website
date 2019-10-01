import React from "react"
import Tree from "react-d3-tree"
import { Link } from "gatsby"

import Layout from "../components/layout"
import MainContainer from "../components/main-container"

const data = require("../json/familytree.json")

const FamilyTree = () => (
  <Layout title="Family Tree">
    <MainContainer>
      <div id="treeWrapper" style={{ width: "50em", height: "20em" }}>
        <Tree data={data} />
      </div>
    </MainContainer>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default FamilyTree
