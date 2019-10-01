/*
 * Header component containing the navbar at the top of the page.
 *
 * 
 */
import React from "react";

function Header(props) {
  return React.createElement("nav", {
    class: "navbar navbar-color-on-scroll navbar-transparent fixed-top  navbar-expand-lg ",
    "color-on-scroll": "100",
    id: "sectionsNav"
  }, React.createElement("div", {
    class: "container"
  }, React.createElement("div", {
    class: "navbar-translate"
  }, React.createElement("a", {
    class: "navbar-brand",
    href: "../pages/home.html"
  }, React.createElement("div", {
    class: "logo-image"
  }, React.createElement("img", {
    src: "../assets/img/UMCPTASA_logo_final.png",
    class: "img-fluid"
  }))), React.createElement("button", {
    class: "navbar-toggler",
    type: "button",
    "data-toggle": "collapse",
    "aria-expanded": "false",
    "aria-label": "Toggle navigation"
  }, React.createElement("span", {
    class: "sr-only"
  }, "Toggle navigation"), React.createElement("span", {
    class: "navbar-toggler-icon"
  }), React.createElement("span", {
    class: "navbar-toggler-icon"
  }), React.createElement("span", {
    class: "navbar-toggler-icon"
  }))), React.createElement("div", {
    class: "collapse navbar-collapse"
  }, React.createElement("ul", {
    class: "navbar-nav ml-auto"
  }, React.createElement("li", {
    class: "dropdown nav-item"
  }), React.createElement("li", {
    class: "nav-item"
  }, React.createElement("a", {
    class: "nav-link",
    href: "../pages/home.html",
    onclick: "scrollToDownload()"
  }, React.createElement("i", {
    class: "material-icons"
  }, "home"), " Home")), React.createElement("li", {
    class: "nav-item"
  }, React.createElement("a", {
    class: "nav-link",
    href: "../pages/about-us.html",
    onclick: "scrollToDownload()"
  }, React.createElement("i", {
    class: "material-icons"
  }, "domain"), " About Us")), React.createElement("li", {
    class: "nav-item"
  }, React.createElement("a", {
    class: "nav-link",
    href: "../pages/board.html",
    onclick: "scrollToDownload()"
  }, React.createElement("i", {
    class: "material-icons"
  }, "group"), " Board")), React.createElement("li", {
    class: "nav-item"
  }, React.createElement("a", {
    class: "nav-link",
    href: "../pages/events.html",
    onclick: "scrollToDownload()"
  }, React.createElement("i", {
    class: "material-icons"
  }, "insert_invitation"), " Events")), React.createElement("li", {
    class: "nav-item"
  }, React.createElement("a", {
    class: "nav-link",
    href: "../pages/biglittle.html",
    onclick: "scrollToDownload()"
  }, React.createElement("i", {
    class: "material-icons"
  }, "wc"), " Big/Little")), React.createElement("li", {
    class: "nav-item"
  }, React.createElement("a", {
    class: "nav-link",
    href: "../pages/archive.html",
    onclick: "scrollToDownload()"
  }, React.createElement("i", {
    class: "material-icons"
  }, "perm_media"), " Archive")), React.createElement("li", {
    class: "nav-item"
  }, React.createElement("a", {
    class: "nav-link",
    href: "../pages/contact-us.html",
    onclick: "scrollToDownload()"
  }, React.createElement("i", {
    class: "material-icons"
  }, "forum"), " Contact Us"))))));
}

{
  const e = React.createElement;
  const domContainer = document.querySelector("#react-header");

  if (domContainer !== null) {
    ReactDOM.render(e(Header), domContainer);
  }
}