import React, { Component, Fragment } from "react";
import "./App.css";
import Helio from "./images/HelioGrad.jpg";
import Hawthorn from "./images/Hawthorn.jpg";
import Header from "./components/Header";
import Footer from "./components/Footer";

class WorkExperience extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <h2>Work Experience</h2>
        <section className="resume-section">
          <div className="container">
            <div className="row">
              <div className="col">
                <div>
                  <h4> Education </h4>
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Brigham_Young_University_medallion.svg/2000px-Brigham_Young_University_medallion.svg.png"
                    alt="byu"
                    className="resumeimages"
                  />
                  <h4>BS Elementary Education (K-6)</h4>
                </div>
              </div>
              <div className="col">
                <div>
                  <h4> Technology Training </h4>
                  <img
                    src="https://course_report_production.s3.amazonaws.com/rich/rich_files/rich_files/3954/s300/hel-stackedlogo-onwhite.png"
                    alt="Logo"
                    className="resumeimages"
                  />
                  <h4>Certification of Competency</h4>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="resume-section">
          <div>
            <a
              href="https://drive.google.com/file/d/1PumvBjIAxutSaBwB80Ch-ZpBE8wzjQ73/view?usp=sharing"
              target="blank"
            >
              <button className="resume-button">Download My Resume</button>
            </a>
          </div>
        </section>

        <header className="backgroundimagesections">
          <h2>Work History</h2>
        </header>

        <section className="workhistory-section">
          <div className="workhistory-card">
            <div className="row">
              <div className="col-sm-4">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Brigham_Young_University_medallion.svg/2000px-Brigham_Young_University_medallion.svg.png"
                  alt="BYU"
                  className="workhistory-img"
                />
              </div>
              <div className="col-sm-8">
                <div className="slide slide-top col">
                  <div className="slide-content">
                    <h3>
                      In 2014, I graduated with a B.S. in Elementary Education
                      (K-6)
                    </h3>
                  </div>
                  <img
                    src="https://cdn-images-1.medium.com/max/2400/1*yktz1koGsQ1kV02GnF5K1A.png"
                    alt="BYU"
                    className="slide-img"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="workhistory-card">
            <div className="row">
              <div className="col-sm-4">
                <img
                  src="http://static1.squarespace.com/static/5812896dd482e97aca1ff170/t/591e175abe6594debd1a8ca5/1534808806708/"
                  alt="Texas State"
                  className="workhistory-img"
                />
              </div>
              <div className="col-sm-8">
                <div className="slide slide-top col">
                  <div className="slide-content">
                    <h3>
                      Moved to Houston, TX and taught 5th grade math/science for
                      3 years
                    </h3>
                  </div>
                  <img
                    src="http://mrgaragedoor.com/wp-content/uploads/sites/2/2015/07/GarageDoorHoustonImage.jpg"
                    alt="Houston TX"
                    className="slide-img"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="workhistory-card">
            <div className="row">
              <div className="col-sm-4">
                <img
                  src="https://hawthornacademy.org/assets/images/footer-logo.png"
                  alt="hawthorn"
                  className="workhistory-img"
                />
              </div>
              <div className="col-sm-8">
                <div className="slide slide-top col">
                  <div className="slide-content">
                    <h3>
                      Moved back to Sandy, UT and taught 4th grade at Hawthorn
                      Academy for 1 year
                    </h3>
                  </div>
                  <img src={Hawthorn} alt="Hawthorn" className="slide-img" />
                </div>
              </div>
            </div>
          </div>

          <div className="workhistory-card">
            <div className="row">
              <div className="col-sm-4">
                <img
                  src="https://course_report_production.s3.amazonaws.com/rich/rich_files/rich_files/3954/s300/hel-stackedlogo-onwhite.png"
                  alt="Helio Logo"
                  className="workhistory-img"
                />
              </div>
              <div className="col-sm-8">
                <div className="slide slide-top col">
                  <div className="slide-content">
                    <h3>
                      Attended Helio Training and gained proficiency in
                      full-stack web development
                    </h3>
                  </div>
                  <img src={Helio} alt="Helio" className="slide-img" />
                </div>
              </div>
            </div>
          </div>

          <div className="workhistory-card">
            <div className="row">
              <div className="col-sm-4">
                <img
                  src="https://d1zx4fn8ox8446.cloudfront.net/filemanager.rboxfile/d5ec7a79ea89427fa4420f6a924c3619/Logo_stacked_against_blue.png"
                  alt="BrightBytes Logo"
                  className="workhistory-img"
                />
              </div>
              <div className="col-sm-8">
                <div className="slide slide-top col">
                  <div className="slide-content">
                    <h3>
                      Working as a Jr. Full Stack Engineer at BrightBytes to
                      "Improve the Way the World Learns".
                    </h3>
                  </div>
                  <img
                    src="https://techcrunch.com/wp-content/uploads/2013/02/screen-shot-2013-02-19-at-5-39-43-pm.png?w=730&crop=1"
                    alt="BrightBytes Advertisement"
                    className="slide-img"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </Fragment>
    );
  }
}

export default WorkExperience;
