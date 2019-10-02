import PropTypes from "prop-types"
import React from "react"

const PageHeader = ({ title, subtitle, imageURL, isLarge }) => {
    let classNames = "page-header header-filter";
    if(!isLarge) {
        classNames += " header-small";
    }
  return (
    <div
      className={classNames}
      data-parallax="true"
      style={{ backgroundImage: `url(${imageURL})` }}
    >
      <div className="container">
        <div className="row">
          <div className="col-md-8 ml-auto mr-auto text-center">
            <h2 className="title">{title}</h2>
            {subtitle && <h4>{subtitle}</h4>}
          </div>
        </div>
      </div>
    </div>
  )
}

PageHeader.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  imageURL: PropTypes.string,
  isLarge: PropTypes.bool,
}

PageHeader.defaultProps = {
  subtitle: null,
  isLargE: false,
}

export default PageHeader
