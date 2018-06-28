import React, {Component, Fragment} from 'react'
import './App.css';
import Header from './Header'
import Footer from "./Footer";


class HomePage extends Component {
    render() {
        return (
            <Fragment>

                <body>

               <Header/>

                <header className="backgroundimagesections">
                    <h1>Daniel Zimmerman</h1>
                    <h2>Web Developer</h2>
                </header>

                <section>
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <img
                                    src="https://lh3.googleusercontent.com/Zpbkpy39-lbYn6LKEP6O7Jnof1fVWNWfi7E43Q44Bm9iLGXLXltbfaRYcZE6l_wpruiTQiURkaF_ZiQuhm47HCcAdgiGo4NjXU5KA9Ki6N_AtXZOACcRZkqDqATIXf_zYLMSCvzNfndX_0hV7cmByMoi_FLShktHuwztW8JU56HU4MphvbiO9eXf76cBrgag2AjZF2pSx8-aetGsdH0EEi1iBYhmKtV1YmtSL3sA1UiaVTE0lUVDyYs1yPEa-lJyu1V-Z_80PK9AuutXTx6VMrr9xPEBR2TDyDIYjynUvT-Gl_PmkE9rzHYVXxCJHNrQRVhiclL2K6Z4mQGX1lD06WsZteN9vMpBWnikAh9SACPZF-DFaT-RwRJ-D6g4payA_qKFb1NKyUvOzxYqNWgAoPJx2ZTKd7gNgo8rURCssu6lV3MdX5mTNiFo14e7cft67LpE3JKymT0S4XMM7n8pW3rmWwgkQjpfln1MJda8H933IHCPhs1m8OxXtbLt_LPdPwrKplGwLHlC4TYYZbk0nBd73qnyVLyZaTsURIonpNa-HEp4JFNJK4L1JOd6fFrfaackQWUe8whCdzR8wNAYN1nSMiA2HdAdCgDEjEkqjljeGnwTCVIcbcqIFFUwxkqRLIxiIemTWhJwZqTVL3GGnC4N0Tx5EsmM=w408-h610-no"
                                    alt="Daniel Zimmerman" className="imagehomepage"/>
                            </div>
                            <div className="col">
                                <a href="https://heliotraining.com/" target="blank"><img
                                    src="https://course_report_production.s3.amazonaws.com/rich/rich_files/rich_files/3954/s300/hel-stackedlogo-onwhite.png"
                                    alt="Helio Logo" className="imagehelio"/></a>
                            </div>
                        </div>
                    </div>
                </section>
               <section className="backgroundimagesections">
                   <h3>About Me</h3>
               </section>
               <section>
                   <div className="container">
                       <div className="row">
                           <div className="col">
                               <p>
                                   I'm attending Helio Training full-stack web development to learn
                                   skills needed to design and build a front-end web app that does
                                   everything it needs to on the back-end. This includes learning server-side
                                   program code, implementation, and maintaining a fully functional,
                                   interactive website. I hope to be a critical member of the development
                                   team with the knowledge and wisdom to make more informed decisions
                                   at every stage of the development process.
                               </p>
                           </div>
                           <div className="col">
                               <h3>My Web Development Skills...</h3>
                               <ul>
                                   <li>HTML/CSS</li>
                                   <li>JavaScript/JSON</li>
                                   <li>Angular 2</li>
                                   <li>React</li>
                                   <li>NodeJS</li>
                                   <li>Express/Hapi</li>
                                   <li>MongoDB</li>
                                   <li>MySQL/PostgreSQL</li>
                                   <li>Test-driven Development</li>
                                   <li>Git</li>
                                   <li>NPM</li>
                                   <li>RESTful APIs</li>
                               </ul>
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

export default HomePage