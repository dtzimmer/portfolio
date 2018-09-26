import React, {Component, Fragment} from 'react'
import './App.css';
import Logo from './DZ Web Design.jpg'



class Footer extends Component {
    render() {
        return (
            <Fragment>
              <div className="footer-styling">
                <img src={Logo} className="footer-logo" alt="logo" />
                <p className="footer-text">Dan Zimmerman | Salt Lake City, UT | daniel.zimmerman@gmail.com | GitHub @ dtzimmer</p>
              </div>
            </Fragment>
        )
    }

}

export default Footer