import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const HeaderLink = ({ pageURL, iconName, name }) => (
  <li className="nav-item">
    <Link to={pageURL} className="nav-link">
      <i className="material-icons">{iconName}</i> {name}
    </Link>
  </li>
)

HeaderLink.propTypes = {
  pageURL: PropTypes.string.isRequired,
  iconName: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
}

export default HeaderLink
