import React, {Component} from 'react'
import './App.css';
import {Link} from 'react-router-dom'


class HomePage extends Component {
    render() {
        return (
            <div>
                <head>
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
                </head>

                <body >

                <div className="navbar">
                    <Link to ="/"><a>Home</a></Link>
                    <Link to ="Portfolio"><a>Portfolio</a></Link>
                    <Link to ="Contact"><a>Contact Me</a></Link>
                    <Link to ="WorkExperience"><a>Work Experience</a></Link>
                </div>

                <header className="main">
                    <h1>Daniel Zimmerman</h1>
                    <h2>Web Developer</h2>
                </header>

                <section>
                    <div>
                        <img
                            src="https://lh3.googleusercontent.com/QKuyi5PFGTRLA1X-XKTueB7xnv0b70gLWe4CNGZynebBp7-zcNC-5jJEBVvLCPmVytsKI_1q93HSX1xyyrByTMfMd76D1L5KGGHPFxu9JOUUG8_HXpTUWAup3h0JohcJYSmhWTUCGcQO7EiCqIoUuwRrkwVLsLoAb3qNrySSMCg4xCAxQszjI-685ex3XP9uw1HFkbTqbnACL2G0Wlx9yNIKKrZrZVxJnBl1H5yEf1ZXRlLL0MGJJ2XxcRmHbFSBoXu37vFi7ziWPc9AH6WY-X4T-WPoz-TEFzhndGA8-eYp5UWZzHwDsr361zEQcPZ69NhvtlS2ZtmMxSRaeMRLr8qUfZ0bLJOs9s_NdbmsTnAIQrkSXlayrvjzHmd7phNiSjWul2eXOzjnC0E9xoBjP-6grjjmZ93ivVk8_G79Zom5mOfh8Q3UHWVSL019X1fSEh4ss7S7yz8xr52S3UVDXWa1F28lTGd_QLs3HRdkTipA6THvxRZypT_Fqsyd2A3Uz8kB3UKyl8OXfmNycD11yhMSb_ArctWFDnpMuvbN5Pl_jcpM-475BhKjYYmVUCbV7CW8HYEWYmxVKmb-45q_0FGTd08zXPcXOFp_ws7YHT-q9cSBiFkYcPRvcTWnwvy8-0khQFhj4T4AHoC61oHNqbH1sbeSqOjT=w485-h726-no"
                            alt="Daniel Zimmerman" className="imagehomepage"/>
                    </div>

                    <div>
                        <a href="https://heliotraining.com/" target="blank"><img
                            src="https://course_report_production.s3.amazonaws.com/rich/rich_files/rich_files/3954/s300/hel-stackedlogo-onwhite.png"
                            alt="Helio Logo" className="imagehelio"/></a>
                    </div>


                </section>
                <section>
                <h3>About Me</h3>
                </section>
                <section>
                        <p className="resizedtextbox">
                            I'm attending Helio Training full-stack web development to learn
                            skills needed to design and build a front-end web app that does
                            everything it needs to on the back-end. This includes learning server-side
                            program code, implementation, and maintaining a fully functional,
                            interactive website. I hope to be a critical member of the development
                            team with the knowledge and wisdom to make more informed decisions
                            at every stage of the development process.
                        </p>

                    <div>
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
                </section>

                <footer>
                    <section className="footericons">
                    <button><a href="https://www.linkedin.com/in/daniel-zimmerman-56959780/" className="fa fa-linkedin"
                               target="blank"></a></button>
                    <button><a href="https://github.com/dtzimmer" className="fa fa-github" target="blank"></a></button>
                    </section>
                </footer>

                </body>

            </div>
        )
    }

}

export default HomePage