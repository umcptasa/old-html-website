"use strict";

/*
 * Header component containing the navbar at the top of the page.
 *
 * 
 */
function Header(props) {
  return React.createElement("nav", {
    className: "navbar navbar-color-on-scroll navbar-transparent fixed-top  navbar-expand-lg ",
    "color-on-scroll": "100",
    id: "sectionsNav"
  }, React.createElement("div", {
    className: "container"
  }, React.createElement("div", {
    className: "navbar-translate"
  }, React.createElement("a", {
    className: "navbar-brand",
    href: "../pages/home.html"
  }, React.createElement("div", {
    className: "logo-image"
  }, React.createElement("img", {
    src: "../assets/img/UMCPTASA_logo_final.png",
    className: "img-fluid"
  }))), React.createElement("button", {
    className: "navbar-toggler",
    type: "button",
    "data-toggle": "collapse",
    "aria-expanded": "false",
    "aria-label": "Toggle navigation"
  }, React.createElement("span", {
    className: "sr-only"
  }, "Toggle navigation"), React.createElement("span", {
    className: "navbar-toggler-icon"
  }), React.createElement("span", {
    className: "navbar-toggler-icon"
  }), React.createElement("span", {
    className: "navbar-toggler-icon"
  }))), React.createElement("div", {
    className: "collapse navbar-collapse"
  }, React.createElement("ul", {
    className: "navbar-nav ml-auto"
  }, React.createElement("li", {
    className: "dropdown nav-item"
  }), React.createElement("li", {
    className: "nav-item"
  }, React.createElement("a", {
    className: "nav-link",
    href: "../pages/home.html"
  }, React.createElement("i", {
    className: "material-icons"
  }, "home"), " Home")), React.createElement("li", {
    className: "nav-item"
  }, React.createElement("a", {
    className: "nav-link",
    href: "../pages/about-us.html"
  }, React.createElement("i", {
    className: "material-icons"
  }, "domain"), " About Us")), React.createElement("li", {
    className: "nav-item"
  }, React.createElement("a", {
    className: "nav-link",
    href: "../pages/board.html"
  }, React.createElement("i", {
    className: "material-icons"
  }, "group"), " Board")), React.createElement("li", {
    className: "nav-item"
  }, React.createElement("a", {
    className: "nav-link",
    href: "../pages/events.html"
  }, React.createElement("i", {
    className: "material-icons"
  }, "insert_invitation"), " Events")), React.createElement("li", {
    className: "nav-item"
  }, React.createElement("a", {
    className: "nav-link",
    href: "../pages/biglittle.html"
  }, React.createElement("i", {
    className: "material-icons"
  }, "wc"), " Big/Little")), React.createElement("li", {
    className: "nav-item"
  }, React.createElement("a", {
    className: "nav-link",
    href: "../pages/archive.html"
  }, React.createElement("i", {
    className: "material-icons"
  }, "perm_media"), " Archive")), React.createElement("li", {
    className: "nav-item"
  }, React.createElement("a", {
    className: "nav-link",
    href: "../pages/contact-us.html"
  }, React.createElement("i", {
    className: "material-icons"
  }, "forum"), " Contact Us"))))));
}

{
  var e = React.createElement;
  var domContainer = document.querySelector("#react-header");

  if (domContainer !== null) {
    ReactDOM.render(e(Header), domContainer);
  }
}