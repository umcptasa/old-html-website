"use strict";

/*
 * Header component containing the navbar at the top of the page.
 *
 * 
 */
function Footer(props) {
  var date = new Date().getFullYear();
  return React.createElement("footer", {
    className: "footer footer-default"
  }, React.createElement("div", {
    className: "container"
  }, React.createElement("nav", {
    className: "float-left"
  }, React.createElement("ul", null, React.createElement("li", null, React.createElement("a", {
    href: "home.html"
  }, "Home")), React.createElement("li", null, React.createElement("a", {
    href: "about-us.html"
  }, "About Us")), React.createElement("li", null, React.createElement("a", {
    href: "contact-us.html"
  }, "Contact Us")))), React.createElement("div", {
    className: "copyright float-right"
  }, "\xA9", date, " UMCP Taiwanese American Student Association")));
}

{
  var e = React.createElement;
  var domContainer = document.querySelector("#react-footer");

  if (domContainer !== null) {
    ReactDOM.render(e(Footer), domContainer);
  }
}