import React from 'react'
import { Link } from 'react-router-dom'

export default class extends React.Component {

    state = {
        name: ''
    }

    render() {
        return (
            <div>
                <body>
                <div className="navbar">
                    <Link to ="/"><a href="#Home">Home</a></Link>
                    <Link to ="Portfolio"><a href="#Portfolio">Portfolio</a></Link>
                    <Link to ="Contact"><a>Contact Me</a></Link>
                    <Link to ="WorkExperience"><a href="">Work Experience</a></Link>
                </div>
                <h1>Name Badge</h1>

                <main class="nbmain">
                    <section class="nbsection">
                        <h2>Hello <br/> My name is...</h2>
                    </section>
                    <h1>{this.state.name}</h1>
                    <article class ="nbarticle">
                        Nice to meet you.
                    </article>
                </main>

                <div>
                    <input type="text"
                           placeholder="Name"
                           value={this.state.name}
                           onChange={event => this.setState({ name: event.target.value })} />
                </div>

                </body>
            </div>
        )
    }

}