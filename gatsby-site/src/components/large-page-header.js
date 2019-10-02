import PropTypes from "prop-types"
import React from "react"

const LargePageHeader = ({ imageURL, children }) => {
  return (
    <div
      className="page-header header-filter"
      data-parallax="true"
      style={{ backgroundImage: `url(${imageURL})` }}
    >
      {children}
    </div>
  )
}

LargePageHeader.propTypes = {
  children: PropTypes.node.isRequired,
  imageURL: PropTypes.string,
}

LargePageHeader.defaultProps = {
  imageURL: require("../images/Taiwan.jpg"),
}

export default LargePageHeader
