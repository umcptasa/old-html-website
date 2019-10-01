/*
 * Header component containing the navbar at the top of the page.
 *
 * @flow
 */
import React from "react";

type Props = {};

function Header(props: Props) {
  return (
    <nav
      class="navbar navbar-color-on-scroll navbar-transparent fixed-top  navbar-expand-lg "
      color-on-scroll="100"
      id="sectionsNav"
    >
      <div class="container">
        <div class="navbar-translate">
          <a class="navbar-brand" href="../pages/home.html">
            <div class="logo-image">
              <img
                src="../assets/img/UMCPTASA_logo_final.png"
                class="img-fluid"
              />
            </div>
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="sr-only">Toggle navigation</span>
            <span class="navbar-toggler-icon"></span>
            <span class="navbar-toggler-icon"></span>
            <span class="navbar-toggler-icon"></span>
          </button>
        </div>
        <div class="collapse navbar-collapse">
          <ul class="navbar-nav ml-auto">
            <li class="dropdown nav-item"></li>
            <li class="nav-item">
              <a
                class="nav-link"
                href="../pages/home.html"
                onclick="scrollToDownload()"
              >
                <i class="material-icons">home</i> Home
              </a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                href="../pages/about-us.html"
                onclick="scrollToDownload()"
              >
                <i class="material-icons">domain</i> About Us
              </a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                href="../pages/board.html"
                onclick="scrollToDownload()"
              >
                <i class="material-icons">group</i> Board
              </a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                href="../pages/events.html"
                onclick="scrollToDownload()"
              >
                <i class="material-icons">insert_invitation</i> Events
              </a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                href="../pages/biglittle.html"
                onclick="scrollToDownload()"
              >
                <i class="material-icons">wc</i> Big/Little
              </a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                href="../pages/archive.html"
                onclick="scrollToDownload()"
              >
                <i class="material-icons">perm_media</i> Archive
              </a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                href="../pages/contact-us.html"
                onclick="scrollToDownload()"
              >
                <i class="material-icons">forum</i> Contact Us
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

{
  const e = React.createElement;
  const domContainer = document.querySelector("#react-header");
  if (domContainer !== null) {
    ReactDOM.render(e(Header), domContainer);
  }
}
