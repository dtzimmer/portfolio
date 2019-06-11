import React, { Component, Fragment } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";

import SAMP from "./images/Smile at My Profile.jpg";
import ShoppingBrain from "./images/Shopping.jpg";
import Fetch from "./images/Fetch.jpg";
import Vidly from "./images/Vidly.jpg";
import THECLAW from "./images/The CLAW.jpg";

import "./App.css";

class Portfolio extends Component {
  render() {
    return (
      <Fragment>
        <div>
          <Header />
          <h2>Portfolio</h2>
          <section className="slideshowbackground">
            <div
              id="carouselExampleIndicators"
              className="carousel slide"
              data-ride="carousel"
            >
              <ol className="carousel-indicators">
                <li
                  data-target="#carouselExampleIndicators"
                  data-slide-to="0"
                  className="active"
                />
                <li
                  data-target="#carouselExampleIndicators"
                  data-slide-to="1"
                />
                <li
                  data-target="#carouselExampleIndicators"
                  data-slide-to="2"
                />
                <li
                  data-target="#carouselExampleIndicators"
                  data-slide-to="3"
                />
                <li
                  data-target="#carouselExampleIndicators"
                  data-slide-to="4"
                />
              </ol>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img className="imageportfolio" src={Vidly} alt="Vidly" />
                  <div className="carousel-caption d-block d-md-block caption-background">
                    <a href="https://vidly.netlify.com" target="blank">
                      <button className="caption-button">Live Site</button>
                    </a>
                  </div>
                </div>
                <div className="carousel-item">
                  <img
                    className="imageportfolio"
                    width="50px"
                    src={ShoppingBrain}
                    alt="Shopping Brain"
                  />
                  <div className="carousel-caption d-block d-md-block caption-background">
                    <a
                      href="https://fun-food-friends-d09e7.firebaseapp.com/"
                      target="blank"
                    >
                      <button className="caption-button">Live Site</button>
                    </a>
                  </div>
                </div>
                <div className="carousel-item">
                  <img className="imageportfolio" src={Fetch} alt="Fetch" />
                  <div className="carousel-caption d-block d-md-block caption-background">
                    <a href="https://fetch.netlify.com/" target="blank">
                      <button className="caption-button">Live Site</button>
                    </a>
                  </div>
                </div>
                <div className="carousel-item">
                  <img className="imageportfolio" src={SAMP} alt="SAMP" />
                  <div className="carousel-caption d-block d-md-block caption-background">
                    <a href="https://samp.netlify.com/" target="blank">
                      <button className="caption-button">Live Site</button>
                    </a>
                  </div>
                </div>
                <div className="carousel-item">
                  <img
                    className="imageportfolio"
                    src={THECLAW}
                    alt="The Claw"
                  />
                  <div className="carousel-caption d-block d-md-block caption-background">
                    <a href="http://theclaw.netlify.com" target="blank">
                      <button className="caption-button">Live Site</button>
                    </a>
                  </div>
                </div>
              </div>
              <a
                className="carousel-control-prev"
                href="#carouselExampleIndicators"
                role="button"
                data-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                />
                <span className="sr-only">Previous</span>
              </a>
              <a
                className="carousel-control-next"
                href="#carouselExampleIndicators"
                role="button"
                data-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                />
                <span className="sr-only">Next</span>
              </a>
            </div>
          </section>

          <section className="portfolioicon-section">
            <div className="polaroid">
              <img src={Vidly} alt="Vidly" className="polaroid-image" />
              <div className="container">
                <b>Video Database App</b>
                <p> React | Node.js | Express | MongoDB | Heroku </p>
                <ul>
                  <li>Passing data from parent to child components</li>
                  <li>Created re-usable components throughout the website</li>
                  <li>
                    Uses pagination, filtering, and sorting of information
                  </li>
                  <li>Practice raising and handling events</li>
                  <li>
                    Uses JSON Web Tokens for authentication and authorization
                  </li>
                  <li>Practiced unit and integration testing on backend</li>
                </ul>
              </div>
            </div>
            <hr />
            <div className="polaroid">
              <img
                src={ShoppingBrain}
                alt="Shopping Brain"
                className="polaroid-image"
              />
              <div className="container">
                <b>Shopping List App</b>
                <p> React | Node.js | FirebaseDB </p>
                <ul>
                  <li>Full CRUD operations on Firebase's Realtime Database</li>
                  <li>Uses Google authentication for user login</li>
                  <li>
                    Protected manipulation of information depending users's
                    authentication
                  </li>
                  <li>
                    Uses JavaScript's mapping method dynamically display the
                    shopping list
                  </li>
                </ul>
              </div>
            </div>
            <hr />
            <div className="polaroid">
              <img src={Fetch} alt="Fetch" className="polaroid-image" />
              <div className="container">
                <b>An API App</b>
                <p> React | Node.js | Express | MongoDB | Now.sh</p>
                <ul>
                  <li>
                    Demonstrates full CRUD using on an Express Server connected
                    to MongoDB
                  </li>
                  <li>Fetches from three different 3rd party API's</li>
                  <li>Displays information dynamically using the map method</li>
                  <li>Practice displaying the loading status to the user</li>
                </ul>
              </div>
            </div>
            <hr />
            <div className="polaroid">
              <img src={SAMP} alt="SAMP" className="polaroid-image" />
              <div className="container">
                <b>Profile Social Media App</b>
                <p> React | Node.js | FirebaseDB </p>
                <ul>
                  <li>Group-developed web application</li>
                  <li>Passing data from parent to child components</li>
                  <li>
                    Full login/password functionality (reset, forgot, change)
                  </li>
                  <li>Uses context to pass data through the component tree</li>
                  <li>
                    Timestamp functionality for commenting on the oldest
                    profiles
                  </li>
                </ul>
              </div>
            </div>
            <hr />
            <div className="polaroid">
              <img src={THECLAW} alt="The Claw" className="polaroid-image" />
              <div className="container">
                <b>Random Name Picker App</b>
                <p> React </p>
                <ul>
                  <li>
                    Passing data from parent component to child components
                  </li>
                  <li>
                    Dynamically utilizes React's state to build arrays of names
                  </li>
                  <li>
                    Uses JavaScript's Math.Random() function to randomly pick a
                    name
                  </li>
                  <li>
                    Utilizes the raising and handling events in the components
                  </li>
                </ul>
              </div>
            </div>
          </section>
          <Footer />
        </div>
      </Fragment>
    );
  }
}

export default Portfolio;
