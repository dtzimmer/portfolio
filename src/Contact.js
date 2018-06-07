import React, {Component} from 'react'
import './App.css';
import { Link } from 'react-router-dom'

class Contact extends Component {
    render() {
        return (
            <div>
                <head>
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
                </head>
                <body>
                <div className="navbar">
                    <Link to ="/"><a href="#Home">Home</a></Link>
                    <Link to ="Portfolio"><a href="#Portfolio">Portfolio</a></Link>
                    <Link to ="WorkExperience"><a href="">Work Experience</a></Link>
                </div>
                <header>
                    <h1>Contact Me</h1>
                </header>
            <section>
                <form>

                        <label form="radio">Are you an Employer?</label>
                        <input type="radio" id="radio" placeholder="Yes?"/>
                            <br/>
                        <label form="name">Name</label>
                        <input type="name" className="u-full-width" id="name" name="name" placeholder="Enter Name"/>
                            <br/>
                        <label form="email">Email:</label>
                        <input type="email" className="u-full-width" id="email" name="email" placeholder="Enter Email"/>
                            <br/>
                        <label form="phone">Phone:</label>
                        <input type="tel" className="u-full-width" id="phone" name="phone" placeholder="Enter Phone"/>
                            <br/>
                        <button type="submit">Submit</button>
                </form>
            </section>
                <section>
                    <h3>Find Me on Social Media</h3>
                </section>
                <section>
                    <button><a href="https://www.facebook.com/dtzimmer" class="fa fa-facebook" target="blank"></a></button>
                    <button><a href="https://twitter.com/MrDanZimmerman" class="fa fa-twitter" target="blank"></a></button>
                    <button><a href="https://www.instagram.com/dtzimmer/?hl=en" class="fa fa-instagram" target="blank"></a></button>
                    <button><a href="https://www.youtube.com/channel/UCHvGJ-eAV8krPgqofo65WYQ?app=desktop" class="fa fa-youtube" target="blank"></a></button>
                    <button><a href="https://www.linkedin.com/in/daniel-zimmerman-56959780/" class="fa fa-linkedin" target="blank"></a></button>
                    <button><a href="https://github.com/dtzimmer" class="fa fa-github" target="blank"></a></button>
                </section>
                </body>
            </div>
        )
    }
}

export default Contact