import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout title="404: Not Found">
    <div
      class="page-header error-page header-filter"
      style={{
        backgroundImage: `url('${require("../images/surpisedpikachu.png")}`,
      }}
    >
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <h1 class="title">404</h1>
            <h2 class="description">Page not found :(</h2>
            <h4 class="description">Uh Oh! Looks like you got lost.</h4>
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default NotFoundPage
