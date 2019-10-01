import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Footer = () => {
  const date = new Date().getFullYear()

  return (
    <footer className="footer footer-default">
      <div className="container">
        <nav className="float-left">
          <ul>
            <li>
              <a href="home.html">Home</a>
            </li>
            <li>
              <a href="about-us.html">About Us</a>
            </li>
            <li>
              <a href="contact-us.html">Contact Us</a>
            </li>
          </ul>
        </nav>
        <div className="copyright float-right">
          &copy;
          {date} UMCP Taiwanese American Student Association
        </div>
      </div>
    </footer>
  )
}

Footer.propTypes = {}

Footer.defaultProps = {}

export default Footer
