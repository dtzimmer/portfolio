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
                                    <img src="http://logonoid.com/images/byu-logo.png" alt="byu" className="resumeimages"/>
                                    <p>BS Elementary Education (K-6)</p>
                                </div>
                            </div>
                            <div className="col">
                                <div>
                                    <h3> Technology Training </h3>
                                    <img
                                        src="https://course_report_production.s3.amazonaws.com/rich/rich_files/rich_files/3954/s300/hel-stackedlogo-onwhite.png"
                                        alt="Logo" className="resumeimages"/>
                                    <p>Certification of Competency</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <div>
                                    <h3> Download My Resume </h3>
                                </div>
                            </div>
                            <div className="col">
                                <div >
                                    <a href="https://drive.google.com/file/d/1Srkw8affqRNVWi3LOfvFfX0ltYVvx6TU/view?usp=sharing"
                                       target="blank"><img
                                        src="https://lh3.googleusercontent.com/MOJcuRZmA7Bn5UHw9aYcqsWIFn1zxdkDbIOLONkAeCp72tVxnW8LHsmz1NOdFtaG14XVOxu5-Z_BNDE5u36kqAL0ATXeeUEL4SSJwybee1g0oznkLGvRt01ZHbinj9dRWOBtJWhFVw-sIsdG8BTK7RYpdxmj3jkES3MonqNqRBPhFC83H67IzGpQUJ9KqNhzSDNP1R9FY2D0i3oee60oKgi7Q60BLlbrUsw8Z7SWkan8KEvlrKv-CMCsb4gDSMO2A3gEwwM-NC8mjn7xbe1SNZVv0-d6uqFoApPvYJEBTfamRIlWBdhze10vjydLVEGxYA194M8gIVAGyg-HH7gATUk5qMQpY1OxPwN_SpMqmnuuf1QrrMGpO6pvbH2RlLaYfDgoOxqyu08uLSYLMVXqki58iqmk2i2K1ZDehhY-yRyKHwMvENbv2w5voz0hHq-XW9f3WEixtTVPjUwGTHdVrw-pEBx5X-896BqFq9kQ6jh154yOLfc6DRBGjFiLfCW3-TCo9EzVCAgcMZdBc6ux77hTyUhrLUXre3KBsu9VdVXoVongBBTo153rpCR7G9WolLIpXfUINlLxeqXVvz3cRhFlMT7Qg9M7qF7EghhESflFfc0edMbrnOwznYIqdAjpm_tWFlniSs61Lha8c7161J9a_s-twE-t=w503-h620-no"
                                        alt="Resume Pic" className="resumeimages"/></a>
                                </div>
                            </div>
                        </div>
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
                                    <img
                                        src="http://universe.byu.edu/wp-content/uploads/photo-gallery/Modern%20Sailor%20Cougar.jpg"
                                        alt="byu" width="100%"/>
                                    <p>Graduated from BYU in 2014 with a BS in Elementary Education</p>
                                </div>
                            </div>
                            <div className="col-sm-3">
                                <div>
                                    <img
                                        src="https://www.cfisd.net/files/3614/0309/8688/cfisd-logo-final-full-color-condensed-cmyk.jpg"
                                        alt="cfisd" width="100%"/>
                                    <p>Moved to Houston, TX and taught 5th grade math/science at Kirk Elementary in
                                        CFISD</p>
                                </div>
                            </div>
                            <div className="col-sm-3">
                                <div>
                                    <img src="https://hawthornacademy.org/assets/images/footer-logo.png" alt="hawthorn"
                                         width="100%"/>
                                    <p>Moved back to Sandy, UT and taught 4th grade at Hawthorn Academy</p>
                                </div>
                            </div>
                            <div className="col-sm-3">
                                <div>
                                    <img
                                        src="https://course_report_production.s3.amazonaws.com/rich/rich_files/rich_files/3954/s300/hel-stackedlogo-onwhite.png"
                                        alt="helio" width="100%"/>
                                    <p>Attending Helio Training to become proficient in front-end and back-end web
                                        development</p>
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