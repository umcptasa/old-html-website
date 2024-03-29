/*
 * Header component containing the navbar at the top of the page.
 *
 * @flow
 */

type Props = {};

function Header(props: Props) {
    return (
        <nav
            className="navbar navbar-color-on-scroll navbar-transparent fixed-top  navbar-expand-lg "
            color-on-scroll="100"
            id="sectionsNav"
        >
            <div className="container">
                <div className="navbar-translate">
                    <a className="navbar-brand" href="../pages/home.html">
                        <div className="logo-image">
                            <img
                                src="../assets/img/UMCPTASA_logo_final.png"
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
                        <li className="nav-item">
                            <a className="nav-link" href="../pages/home.html">
                                <i className="material-icons">home</i> Home
                            </a>
                        </li>
                        <li className="nav-item">
                            <a
                                className="nav-link"
                                href="../pages/about-us.html"
                            >
                                <i className="material-icons">domain</i> About
                                Us
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="../pages/board.html">
                                <i className="material-icons">group</i> Board
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="../pages/events.html">
                                <i className="material-icons">
                                    insert_invitation
                                </i>{" "}
                                Events
                            </a>
                        </li>
                        <li class="nav-item dropdown">
                            <a
                                class="nav-link dropdown-toggle"
                                data-toggle="dropdown"
                                href="#"
                            >
                                <i className="material-icons">wc</i> Big/Little
                                <span class="caret"></span>
                            </a>
                            <ul class="dropdown-menu">
                                <li>
                                    <a
                                        className="nav-link"
                                        href="../pages/biglittle.html"
                                    >
                                        <i className="material-icons">wc</i>{" "}
                                        Big/Little
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className="nav-link"
                                        href="../pages/familytree.html"
                                    >
                                        <i className="material-icons">
                                            account_tree
                                        </i>{" "}
                                        Family Tree
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className="nav-link"
                                        href="../pages/familytreereveal.html"
                                    >
                                        <i className="material-icons">
                                            people
                                        </i>{" "}
                                        Big/Little Reveal
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <a
                                className="nav-link"
                                href="../pages/archive.html"
                            >
                                <i className="material-icons">perm_media</i>{" "}
                                Archive
                            </a>
                        </li>
                        <li className="nav-item">
                            <a
                                className="nav-link"
                                href="../pages/contact-us.html"
                            >
                                <i className="material-icons">forum</i> Contact
                                Us
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
