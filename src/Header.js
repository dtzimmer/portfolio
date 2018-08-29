import React, {Component, Fragment} from 'react'
import './App.css';
import {Link} from 'react-router-dom'




class Header extends Component {
    render() {
        return (
            <Fragment>

                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <button className="navbar-toggler" type="button" data-toggle="collapse"
                            data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false"
                            aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <Link to ="/"><a className="nav-item nav-link active">Home <span
                                className="sr-only">(current)</span></a></Link>
                            <Link to ="Portfolio"><a className="nav-item nav-link">Portfolio</a></Link>
                            {/*<Link to ="Contact"><a className="nav-item nav-link">Contact</a></Link>*/}
                            <Link to ="WorkExperience"><a className="nav-item nav-link">Work Experience</a></Link>
                        </div>
                    </div>
                    <div>
                        <a href="https://linkedin.com/in/dtzimmer" target="blank" ><i className="fa fa-linkedin"></i></a>
                        <a href="https://github.com/dtzimmer" target="blank"><i className="fa fa-github"></i></a>
                    </div>
                </nav>
            </Fragment>
        )
    }

}

export default Header

