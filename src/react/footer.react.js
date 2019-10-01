/*
 * Header component containing the navbar at the top of the page.
 *
 * @flow
 */

type Props = {};

function Footer(props: Props) {
  const date = new Date().getFullYear();
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
  );
}

{
  const e = React.createElement;
  const domContainer = document.querySelector("#react-footer");
  if (domContainer !== null) {
    ReactDOM.render(e(Footer), domContainer);
  }
}
