import React, {Component, Fragment} from 'react'
import './App.css';
import Header from "./Header";
import Footer from "./Footer";

class WorkExperience extends Component {
    render() {
        return (
            <Fragment>
                <body>
                <Header/>

                <header className="backgroundimagesections">
                    <h1>Daniel Zimmerman</h1>
                    <h2>Education and Work Experience</h2>
                </header>
                <section>
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <div>
                                    <h3> Education </h3>
                                    <img src="http://logonoid.com/images/byu-logo.png" alt="byu" width="100%"/>
                                    <p>BS Elementary Education (K-6)</p>
                                </div>
                            </div>
                            <div className="col">
                                <div>
                                    <h3> Technology Training </h3>
                                    <img
                                        src="https://course_report_production.s3.amazonaws.com/rich/rich_files/rich_files/3954/s300/hel-stackedlogo-onwhite.png"
                                        alt="Logo" width="100%"/>
                                    <p>Certification of Competency</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <h3> Download My Resume </h3>
                    <div>
                        <button><a href="https://drive.google.com/file/d/1GMcig61koDVq3lo1bYtHnogxEQGe9xsy/view?usp=sharing" target="blank">Resume</a></button>
                    </div>
                </section>
                <header className="backgroundimagesections">
                <h2>Work History</h2>
                </header>
                <section>
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-3">
                                <div>
                                    <img src="http://universe.byu.edu/wp-content/uploads/photo-gallery/Modern%20Sailor%20Cougar.jpg" alt="byu" width="100%"/>
                                <p>Graduated from BYU in 2014 with a BS in Elementary Education</p>
                                </div>
                            </div>
                            <div className="col-sm-3">
                                <div>
                                    <img src="https://www.cfisd.net/files/3614/0309/8688/cfisd-logo-final-full-color-condensed-cmyk.jpg" alt="cfisd" width="100%"/>
                                <p>Moved to Houston, TX and taught 5th grade math/science at Kirk Elementary in CFISD</p>
                                </div>
                            </div>
                            <div className="col-sm-3">
                                <div>
                                    <img src="https://hawthornacademy.org/assets/images/footer-logo.png" alt="hawthorn" width="100%"/>
                                <p>Moved back to Sandy, UT and taught 4th grade at Hawthorn Academy</p>
                                </div>
                            </div>
                            <div className="col-sm-3">
                                <div>
                                    <img src="https://course_report_production.s3.amazonaws.com/rich/rich_files/rich_files/3954/s300/hel-stackedlogo-onwhite.png" alt="helio" width="100%"/>
                                    <p>Attending Helio Training to become proficient in front-end and back-end web development</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <Footer/>
                </body>
            </Fragment>
        )
    }
}

export default WorkExperience