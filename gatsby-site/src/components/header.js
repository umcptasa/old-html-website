import React from "react"
import Logo from "../images/UMCPTASA_logo_final.png"
import HeaderLink from "../components/headerLink"

const Header = () => (
  <nav
    className="navbar navbar-color-on-scroll navbar-transparent fixed-top navbar-expand-lg "
    color-on-scroll="100"
    id="sectionsNav"
  >
    <div className="container">
      <div className="navbar-translate">
        <a className="navbar-brand" href="../pages/home.html">
          <div className="logo-image">
            <img
              src={Logo}
              className="img-fluid"
            />
          </div>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="sr-only">Toggle navigation</span>
          <span className="navbar-toggler-icon"></span>
          <span className="navbar-toggler-icon"></span>
          <span className="navbar-toggler-icon"></span>
        </button>
      </div>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav ml-auto">
          <li className="dropdown nav-item"></li>
          <HeaderLink pageURL="/" iconName="home" name="Home"/>
          <HeaderLink pageURL="/about-us/" iconName="domain" name="About Us"/>
          <HeaderLink pageURL="/board/" iconName="group" name="Board"/>
          <HeaderLink pageURL="/events/" iconName="insert_invitation" name="Events"/>
          <HeaderLink pageURL="/biglittle/" iconName="wc" name="Big/Little"/>
          <HeaderLink pageURL="/archive/" iconName="perm_media" name="Archive"/>
          <HeaderLink pageURL="/contact-us/" iconName="forum" name="Contact Us"/>
          
        </ul>
      </div>
    </div>
  </nav>
)

export default Header
