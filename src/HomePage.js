import React, {Component} from 'react'
import './App.css';
import {Link} from 'react-router-dom'


class HomePage extends Component {
    render() {
        return (
            <div>

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

                <article>
                    <p>
                        Currently, I am attending the Helio Web Development Training. I will be able to do front-end
                        and back-end web development.
                        I have experience in the field of education and technology as well as college level training
                        in art and design. I hope to be a valuable member of a web development team.
                    </p>
                </article>

                <section>
                             <div>
                                    <img
                                        src="https://lh3.googleusercontent.com/QKuyi5PFGTRLA1X-XKTueB7xnv0b70gLWe4CNGZynebBp7-zcNC-5jJEBVvLCPmVytsKI_1q93HSX1xyyrByTMfMd76D1L5KGGHPFxu9JOUUG8_HXpTUWAup3h0JohcJYSmhWTUCGcQO7EiCqIoUuwRrkwVLsLoAb3qNrySSMCg4xCAxQszjI-685ex3XP9uw1HFkbTqbnACL2G0Wlx9yNIKKrZrZVxJnBl1H5yEf1ZXRlLL0MGJJ2XxcRmHbFSBoXu37vFi7ziWPc9AH6WY-X4T-WPoz-TEFzhndGA8-eYp5UWZzHwDsr361zEQcPZ69NhvtlS2ZtmMxSRaeMRLr8qUfZ0bLJOs9s_NdbmsTnAIQrkSXlayrvjzHmd7phNiSjWul2eXOzjnC0E9xoBjP-6grjjmZ93ivVk8_G79Zom5mOfh8Q3UHWVSL019X1fSEh4ss7S7yz8xr52S3UVDXWa1F28lTGd_QLs3HRdkTipA6THvxRZypT_Fqsyd2A3Uz8kB3UKyl8OXfmNycD11yhMSb_ArctWFDnpMuvbN5Pl_jcpM-475BhKjYYmVUCbV7CW8HYEWYmxVKmb-45q_0FGTd08zXPcXOFp_ws7YHT-q9cSBiFkYcPRvcTWnwvy8-0khQFhj4T4AHoC61oHNqbH1sbeSqOjT=w485-h726-no"
                                        alt="Daniel Zimmerman" />
                             </div>
                             <div>
                                    <img
                                         src="https://course_report_production.s3.amazonaws.com/rich/rich_files/rich_files/3954/s300/hel-stackedlogo-onwhite.png"
                                         alt="Helio Logo" />
                             </div>
                </section>




                </body>

            </div>
        )
    }

}

export default HomePage