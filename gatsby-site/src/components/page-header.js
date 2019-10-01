import PropTypes from "prop-types"
import React from "react"

const PageHeader = ({ title, imageURL }) => (
  <div
    className="page-header header-filter header-small"
    data-parallax="true"
    style={{backgroundImage: `url(${imageURL})`}}
  >
    <div className="container">
      <div className="row">
        <div className="col-md-8 ml-auto mr-auto text-center">
          <h2 className="title">{title}</h2>
        </div>
      </div>
    </div>
  </div>
)

PageHeader.propTypes = {
  title: PropTypes.string,
  imageURL: PropTypes.string,
}

PageHeader.defaultProps = {}

export default PageHeader
