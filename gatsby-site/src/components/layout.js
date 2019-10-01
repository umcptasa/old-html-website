/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import SEO from "./seo"
import Header from "./header"
import Footer from "./footer"
import PageHeader from "./page-header"

const Layout = ({ children, title, imageURL }) => {
  /*const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)*/

  return (
    <>
      <SEO title={title} />
      <Header />
      <PageHeader title={title} imageURL={imageURL} />
      <main>{children}</main>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
  imageURL: PropTypes.string,
}

Layout.defaultProps = {
    title: "UMCP TASA",
    imageURL: require('../images/Taiwan.jpg')
}

export default Layout
