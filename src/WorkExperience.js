import React, { Component, Fragment } from 'react'
import './App.css'
import Header from './Header'
import Footer from './Footer'

class WorkExperience extends Component {
  render() {
    return (
      <Fragment>
          <Header />

          <header className="backgroundimagesections">
            <h1>Daniel Zimmerman</h1>
            <h2>Education and Work Experience</h2>
          </header>
          <section className="workhistory-section">
            <div className="container">
              <div className="row">
                <div className="col">
                  <div>
                    <h3> Education </h3>
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Brigham_Young_University_medallion.svg/2000px-Brigham_Young_University_medallion.svg.png"
                      alt="byu" className="resumeimages" />
                    <p>BS Elementary Education (K-6)</p>
                  </div>
                </div>
                <div className="col">
                  <div>
                    <h3> Technology Training </h3>
                    <img
                      src="https://course_report_production.s3.amazonaws.com/rich/rich_files/rich_files/3954/s300/hel-stackedlogo-onwhite.png"
                      alt="Logo" className="resumeimages" />
                    <p>Certification of Competency</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="workhistory-section">
            <div>
              <a href="https://drive.google.com/file/d/1PumvBjIAxutSaBwB80Ch-ZpBE8wzjQ73/view?usp=sharing"
                 target="blank">
                <button>Download My Resume</button>
              </a>
            </div>
          </section>
          <header className="backgroundimagesections">
            <h2>Work History</h2>
          </header>
          <section className="workhistory-section">
            <div className="container">
              <div className="row">
                <div className="col-sm-3">
                  <div>
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Brigham_Young_University_medallion.svg/2000px-Brigham_Young_University_medallion.svg.png"
                      alt="byu" width="100%" />
                    <p>Graduated from BYU in 2014 with a BS in Elementary Education</p>
                  </div>
                </div>
                <div className="col-sm-3">
                  <div>
                    <img
                      src="http://static1.squarespace.com/static/5812896dd482e97aca1ff170/t/591e175abe6594debd1a8ca5/1534808806708/"
                      alt="texas" width="100%" />
                    <p>Moved to Houston, TX and taught 5th grade math/science for 3 years</p>
                  </div>
                </div>
                <div className="col-sm-3">
                  <div>
                    <img src="https://hawthornacademy.org/assets/images/footer-logo.png" alt="hawthorn"
                         width="100%" />
                    <p>Moved back to Sandy, UT and taught 4th grade at Hawthorn Academy for 1 year</p>
                  </div>
                </div>
                <div className="col-sm-3">
                  <div>
                    <img
                      src="https://course_report_production.s3.amazonaws.com/rich/rich_files/rich_files/3954/s300/hel-stackedlogo-onwhite.png"
                      alt="helio" width="100%" />
                    <p>Attended Helio Training and gained proficiency in front-end and back-end web
                      development</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <Footer />
      </Fragment>
    )
  }
}

export default WorkExperience