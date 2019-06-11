import React, { Component, Fragment } from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

class HomePage extends Component {
  render() {
    return (
      <Fragment>
        <Header />

        <header>
          <div className="self-portrait">
            <img
              src="https://lh3.googleusercontent.com/Zpbkpy39-lbYn6LKEP6O7Jnof1fVWNWfi7E43Q44Bm9iLGXLXltbfaRYcZE6l_wpruiTQiURkaF_ZiQuhm47HCcAdgiGo4NjXU5KA9Ki6N_AtXZOACcRZkqDqATIXf_zYLMSCvzNfndX_0hV7cmByMoi_FLShktHuwztW8JU56HU4MphvbiO9eXf76cBrgag2AjZF2pSx8-aetGsdH0EEi1iBYhmKtV1YmtSL3sA1UiaVTE0lUVDyYs1yPEa-lJyu1V-Z_80PK9AuutXTx6VMrr9xPEBR2TDyDIYjynUvT-Gl_PmkE9rzHYVXxCJHNrQRVhiclL2K6Z4mQGX1lD06WsZteN9vMpBWnikAh9SACPZF-DFaT-RwRJ-D6g4payA_qKFb1NKyUvOzxYqNWgAoPJx2ZTKd7gNgo8rURCssu6lV3MdX5mTNiFo14e7cft67LpE3JKymT0S4XMM7n8pW3rmWwgkQjpfln1MJda8H933IHCPhs1m8OxXtbLt_LPdPwrKplGwLHlC4TYYZbk0nBd73qnyVLyZaTsURIonpNa-HEp4JFNJK4L1JOd6fFrfaackQWUe8whCdzR8wNAYN1nSMiA2HdAdCgDEjEkqjljeGnwTCVIcbcqIFFUwxkqRLIxiIemTWhJwZqTVL3GGnC4N0Tx5EsmM=w408-h610-no"
              alt="Daniel Zimmerman"
              className="imagehomepage"
            />
          </div>
        </header>

        <div>
          <h2>Current Skills</h2>
        </div>
        <div className="skills-section">
          <a href="https://reactjs.org/" target="blank">
            <img
              src="https://coder.clothing/images/stories/virtuemart/product/reactjs-logo-sticker.jpg"
              alt="React Logo"
              className="logoimages"
            />
          </a>
          <a
            href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
            target="blank"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"
              alt="JS Logo"
              className="logoimages"
            />
          </a>
          <a href="https://nodejs.org/en/" target="blank">
            <img
              src="https://software.intel.com/sites/default/files/managed/fa/a0/Runtime-logo-Node.jpg"
              alt="NodeJS Logo"
              className="logoimages"
            />
          </a>
          <a href="https://css-tricks.com/" target="blank">
            <img
              src="https://www.lifewire.com/thmb/zrcb1zA4Vi47uULJhJKJdcshBgk=/1024x1024/filters:fill(auto,1)/css3-57b597e85f9b58b5c2b338de.png"
              alt="CSS Logo"
              className="logoimages"
            />
          </a>
          <a href="https://firebase.google.com/" target="blank">
            <img
              src="https://ih0.redbubble.net/image.489553250.2202/flat,550x550,075,f.jpg"
              alt="Firebase Logo"
              className="logoimages"
            />
          </a>
          <a href="https://github.com/" target="blank">
            <img
              src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
              alt="Git Hub Logo"
              className="logoimages"
            />
          </a>
          <a href="https://www.mongodb.com/" target="blank">
            <img
              src="https://cacm.acm.org/system/assets/0002/7119/042117_Theodo_MongoDB.large.jpg?1492791427&1492791427"
              alt="MongoDB Logo"
              className="logoimages"
            />
          </a>
          <a href="https://www.postgresql.org/" target="blank">
            <img
              src="http://www.invetics.co.uk/wp-content/uploads/2014/11/1229967231.gif"
              alt="Postgres Logo"
              className="logoimages"
            />
          </a>
        </div>
        <div className="codewars-section">
          <h4>Codewars</h4>
          <img
            src="https://www.codewars.com/users/dtzimmer/badges/large"
            alt="Codewars"
            className="codewars-icon"
          />
        </div>

        <Footer />
      </Fragment>
    );
  }
}

export default HomePage;
