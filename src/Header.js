import React, {Component, Fragment} from 'react';
import './App.css';
import {Link} from 'react-router-dom';

class Header extends Component {
    render() {
        return (
            <Fragment>

                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <button className="navbar-toggler" type="button" data-toggle="collapse"
                            data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false"
                            aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"/>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <Link to ="/" className="nav-item nav-link">Home</Link>
                            <Link to ="Portfolio"className="nav-item nav-link">Portfolio</Link>
                            <Link to ="WorkExperience" className="nav-item nav-link">Work Experience</Link>
                        </div>
                    </div>
                    <div>
                        <a href="https://linkedin.com/in/dtzimmer" target="blank" ><i className="fa fa-linkedin"/></a>
                        <a href="https://github.com/dtzimmer" target="blank"><i className="fa fa-github"/></a>
                    </div>
                </nav>
            </Fragment>
        )
    }

}

export default Header

