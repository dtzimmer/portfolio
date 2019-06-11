import React, { Component, Fragment } from "react";
import "./index.css";

class Footer extends Component {
  render() {
    return (
      <Fragment>
        <div className="footer-styling">
          <p className="footer-text">
            Dan Zimmerman | Salt Lake City, UT | daniel.zimmerman@gmail.com |
            GitHub @ dtzimmer
          </p>
        </div>
      </Fragment>
    );
  }
}

export default Footer;
