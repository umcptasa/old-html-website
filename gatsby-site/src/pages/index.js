import React from "react"

import Layout from "../components/layout"
import LargePageHeader from "../components/large-page-header"

const IndexPage = () => {
  const title = "Home"
  return (
    <Layout title={title}>
      <LargePageHeader imageURL={require("../images/Taiwan.jpg")}>
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <h1>University of Maryland College Park</h1>
            <h1>Taiwanese American Student Association</h1>
            <h4>Dedicated to promoting Taiwan's rich culture and heritage</h4>
            <br />
            <a href="events.html" class="btn btn-rose btn-round"
              >Upcoming Events</a
            >
          </div>
        </div>
      </div>
      </LargePageHeader>
      <div className="main main-raised">
        <div className="container">
          <div className="section text-center">
            <div className="row">
              <div className="col-md-8 ml-auto mr-auto">
                <h2 className="title">Welcome to TASA @ UMCP</h2>
                <h5 className="description">
                  <b>Taiwanese American Student Association (TASA)</b> is a
                  social and cultural student organization that aims to
                  celebrate Taiwanese culture. We welcome people from any
                  cultural background as long as you are curious or passionate
                  about Taiwanese culture. We have weekly GBMS on{" "}
                  <b>Mondays 7pm - 9pm</b> in Stamp Student Union and host
                  multiple events each semester. Want to learn more? Check out
                  what were about.
                </h5>
                <a
                  href="../pages/about-us.html"
                  className="btn btn-rose btn-round"
                >
                  About TASA
                </a>
              </div>
            </div>
          </div>
          <div className="section">
            <h2 className="title text-center">Events</h2>
            <h5 className="description text-center">
              TASA organizes many fun events throughout the year! Be sure to
              follow us on{" "}
              <a href="https://www.facebook.com/umcptasa/">Facebook</a> for all
              the latest announcements!
            </h5>
            <div className="row">
              <div className="col-md-4">
                <div className="card card-plain card-blog">
                  <div className="card-header card-header-image">
                    <img
                      className="img img-raised"
                      src={require("../images/events2019_20/biglittleweek.jpg")}
                    />
                  </div>
                  <div className="card-body">
                    <h4 className="card-title">Big/Little Week</h4>
                    <p className="card-description">
                      HELLLOOOOOH and WELCOME to TASA’s BIG Little WEEEEEEKKKK!
                      We are so excited to meet all our incoming future littos
                      and bring you into the warm loving and food-filled arms of
                      a TASA family.
                      <br />
                      <a href="events.html"> Read More </a>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card card-plain card-blog">
                  <div className="card-header card-header-image">
                    <img
                      className="img img-raised"
                      src={require("../images/events2019_20/shaved ice gbm.jpg")}
                    />
                  </div>
                  <div className="card-body">
                    <h4 className="card-title">Shaved Ice GBM</h4>
                    <p className="card-description">
                      Chill with TASA and try some refreshing shaved ice with
                      new and old friends!
                      <br />
                      <a href="events.html"> Read More </a>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card card-plain card-blog">
                  <div className="card-header card-header-image">
                    <img
                      className="img img-raised"
                      src={require("../images/events2019_20/aapi week.jpg")}
                    />
                  </div>
                  <div className="card-body">
                    <h4 className="card-title">AAPI Week</h4>
                    <p className="card-description">
                      The brothers of UMCP Phi Delta Sigma Fraternity, Inc, and
                      our various sponsors, would like to welcome you all back
                      to campus!
                      <br />
                      <a href="events.html"> Read More </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="section text-center">
              <a href="events.html" className="btn btn-rose btn-round">
                Upcoming and Past Events
              </a>
            </div>
          </div>
        </div>
        <div
          className="team-5 section-image"
          style={{ backgroundImage: `url(${require("../images/bg10.jpg")})` }}
        >
          <div className="container">
            <div className="section text-center white-text">
              <h2>Want to see who makes it all happen?</h2>
              <h5>Check out our co-presidents!</h5>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="card card-profile card-plain">
                  <div className="row">
                    <div className="col-md-5">
                      <div className="card-header card-header-image">
                        <img
                          className="img"
                          src={require("../images/Board2019_20/copresident1.jpg")}
                        />
                      </div>
                    </div>
                    <div className="col-md-7">
                      <div className="card-body">
                        <h4 className="card-title">Angela Pan</h4>
                        <h6 className="card-category text-muted">
                          Co-President
                        </h6>
                        <p className="card-description">
                          I’m Angela Pan, TASA’s #1 fan. I’m a junior CS and
                          psychology major and I play the villager in Smash. Go
                          TASA.
                        </p>
                        <a href="board.html"> Read More </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="card card-profile card-plain">
                  <div className="row">
                    <div className="col-md-5">
                      <div className="card-header card-header-image">
                        <img
                          className="img"
                          src={require("../images/Board2019_20/copresident2.jpg")}
                        />
                      </div>
                    </div>
                    <div className="col-md-7">
                      <div className="card-body">
                        <h4 className="card-title">Aza Shiao</h4>
                        <h6 className="card-category text-muted">
                          Co-President
                        </h6>
                        <p className="card-description">
                          Hello! My name is Aza, and I’m excited to spend my
                          third year on UMCP TASA’s board. In my remaining time
                          here, I’d like to strengthen the Taiwanese American
                          and Asian American...
                          <a href="board.html"> Read More </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="section text-center white-text">
              <h3>Check out the others</h3>
              <br />
              <a href="board.html" className="btn btn-rose btn-round">
                Board
              </a>
            </div>
          </div>
        </div>
        <div className="section text-center">
          <div className="row">
            <div className="col-md-8 ml-auto mr-auto">
              <h2 className="title">Want to contact us?</h2>
              <a href="contact-us.html" className="btn btn-rose btn-round">
                Click here!
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* <MainContainer>
        <Link to="/familytree/">Go to page 2</Link>
        </MainContainer> */}
    </Layout>
  )
}

export default IndexPage
