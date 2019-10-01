import PropTypes from "prop-types"
import React from "react"

const MainContainer = ({ children }) => (
  <div class="main main-raised">
    <div class="container">{children}</div>
  </div>
)

MainContainer.propTypes = {
  children: PropTypes.node.isRequired,
}

export default MainContainer
