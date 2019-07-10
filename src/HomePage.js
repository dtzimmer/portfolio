import React, { Component, Fragment } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";

import "./App.css";

class HomePage extends Component {
  render() {
    return (
      <Fragment>
        <Header />
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
