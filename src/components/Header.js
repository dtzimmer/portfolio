import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";

import Logo from "../images/DZ Web Design.jpg";

import "./index.css";

class Header extends Component {
  render() {
    return (
      <Fragment>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <img src={Logo} className="header-logo" alt="logo" />

          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <Link to="/" className="nav-item nav-link">
                Home
              </Link>
              <Link to="Portfolio" className="nav-item nav-link">
                Portfolio
              </Link>
              <Link to="WorkExperience" className="nav-item nav-link">
                Work Experience
              </Link>
            </div>
          </div>
          <div className="header-icons">
            <a href="https://linkedin.com/in/dtzimmer" target="blank">
              <i className="fa fa-linkedin" />
            </a>
            <a href="https://github.com/dtzimmer" target="blank">
              <i className="fa fa-github" />
            </a>
          </div>
        </nav>
        <div className="subheader">
          <div>
            <img
              src="https://lh3.googleusercontent.com/Zpbkpy39-lbYn6LKEP6O7Jnof1fVWNWfi7E43Q44Bm9iLGXLXltbfaRYcZE6l_wpruiTQiURkaF_ZiQuhm47HCcAdgiGo4NjXU5KA9Ki6N_AtXZOACcRZkqDqATIXf_zYLMSCvzNfndX_0hV7cmByMoi_FLShktHuwztW8JU56HU4MphvbiO9eXf76cBrgag2AjZF2pSx8-aetGsdH0EEi1iBYhmKtV1YmtSL3sA1UiaVTE0lUVDyYs1yPEa-lJyu1V-Z_80PK9AuutXTx6VMrr9xPEBR2TDyDIYjynUvT-Gl_PmkE9rzHYVXxCJHNrQRVhiclL2K6Z4mQGX1lD06WsZteN9vMpBWnikAh9SACPZF-DFaT-RwRJ-D6g4payA_qKFb1NKyUvOzxYqNWgAoPJx2ZTKd7gNgo8rURCssu6lV3MdX5mTNiFo14e7cft67LpE3JKymT0S4XMM7n8pW3rmWwgkQjpfln1MJda8H933IHCPhs1m8OxXtbLt_LPdPwrKplGwLHlC4TYYZbk0nBd73qnyVLyZaTsURIonpNa-HEp4JFNJK4L1JOd6fFrfaackQWUe8whCdzR8wNAYN1nSMiA2HdAdCgDEjEkqjljeGnwTCVIcbcqIFFUwxkqRLIxiIemTWhJwZqTVL3GGnC4N0Tx5EsmM=w408-h610-no"
              alt="Daniel Zimmerman"
              className="imagehomepage"
            />
          </div>
          <div>
            <h1>Daniel Zimmerman</h1>
            <h2>Full-Stack Engineer</h2>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Header;
