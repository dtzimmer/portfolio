import React, { Component, Fragment } from 'react'
import './App.css'
import SAMP from './Smile at My Profile.jpg'
import ShoppingBrain from './Shopping.jpg'
import Fetch from './Fetch.jpg'
import Vidly from './Vidly.jpg'
import Jazz from './Jazz Logo.png'
import THECLAW from './The CLAW.jpg'
import Header from './Header'
import Footer from './Footer'

class Portfolio extends Component {
  render() {
    return (
      <Fragment>
        <body>
          <Header />

          <header className="backgroundimagesections">
            <h1>Daniel Zimmerman</h1>
            <h2>Portfolio</h2>
          </header>
          {/*<section className="portfoliosection">*/}


            {/*<div>*/}
              {/*<a href="https://fun-food-friends-d09e7.firebaseapp.com/" target="blank"><img*/}
                {/*src={ShoppingBrain}*/}
                {/*alt="Shopping Brain" className="imageportfolio" /></a>*/}
              {/*<p>Shopping App "Shopping Brain"</p>*/}
            {/*</div>*/}

            {/*<div>*/}
              {/*<a href="https://fetch.netlify.com/" target="blank"><img*/}
                {/*src={Fetch}*/}
                {/*alt="Fetch Website" className="imageportfolio" /></a>*/}
              {/*<p>fetch.netlify.com</p>*/}
            {/*</div>*/}

            {/*<div>*/}
              {/*<a href="https://samp.netlify.com/" target="blank"><img*/}
                {/*src={SAMP}*/}
                {/*alt="Smile At My Profile" className="imageportfolio" /></a>*/}
              {/*<p>Smile At My Profile</p>*/}
            {/*</div>*/}

            {/*<div>*/}
              {/*<a href="https://github.com/dtzimmer/vidly" target="blank"><img*/}
                {/*src={Vidly}*/}
                {/*alt="Vidly" className="imageportfolio" /></a>*/}
              {/*<p>Vidly - Backend (See on Github)</p>*/}
            {/*</div>*/}

            {/*<div>*/}
              {/*<a href="http://theclaw.netlify.com" target="blank"><img*/}
                {/*src={THECLAW}*/}
                {/*alt="Shopping Brain" className="imageportfolio" /></a>*/}
              {/*<p>Random Name Chooser</p>*/}
            {/*</div>*/}

            {/*<div>*/}
              {/*<a href="https://build-ccjcuqcccj.now.sh/" target="blank"><img*/}
                {/*src={Jazz}*/}
                {/*alt="Utah Jazz Site" className="imageportfolio" /></a>*/}
              {/*<p>Utah Jazz Fan Site</p>*/}
            {/*</div>*/}
          {/*</section>*/}
          <section className="slideshowbackground">
            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
              <ol className="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"/>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"/>
                <li data-target="#carouselExampleIndicators" data-slide-to="2"/>
                <li data-target="#carouselExampleIndicators" data-slide-to="3"/>
                <li data-target="#carouselExampleIndicators" data-slide-to="4"/>
                <li data-target="#carouselExampleIndicators" data-slide-to="5"/>
              </ol>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img
                    className="imageportfolio"
                    src={ShoppingBrain}
                    alt="Shopping Brain" />
                  <div className="carousel-caption d-block d-md-block caption-background">
                    <p className="caption-font">Technology Used: Node | React | Firebase </p>
                    <a href="https://fun-food-friends-d09e7.firebaseapp.com/" target="blank">
                      <button className="caption-button">Live Site</button>
                    </a>
                  </div>
                </div>
                <div className="carousel-item">
                    <img
                      className="imageportfolio"
                      src={Fetch}
                      alt="Fetch" />
                  <div className="carousel-caption d-block d-md-block caption-background">
                    <p className="caption-font">Technology Used: Node | React | Express | MongoDB </p>
                    <a href="https://fetch.netlify.com/" target="blank">
                      <button className="caption-button">Live Site</button>
                    </a>
                  </div>
                </div>
                <div className="carousel-item">
                    <img
                      className="imageportfolio"
                      src={SAMP}
                      alt="SAMP" />
                  <div className="carousel-caption d-block d-md-block caption-background">
                    <p className="caption-font">Technology Used: Node | React | Firebase </p>
                    <a href="https://samp.netlify.com/" target="blank">
                      <button className="caption-button">Live Site</button>
                    </a>
                  </div>
                </div>
                <div className="carousel-item">
                    <img
                      className="imageportfolio"
                      src={Vidly}
                      alt="Vidly" />
                  <div className="carousel-caption d-block d-md-block caption-background">
                    <p className="caption-font">Technology Used: Node | Express | MongoDB</p>
                    <a href="https://github.com/dtzimmer/vidly" target="blank">
                      <button className="caption-button">GitHub Repo</button>
                    </a>
                  </div>
                </div>
                <div className="carousel-item">
                    <img
                      className="imageportfolio"
                      src={THECLAW}
                      alt="The Claw" />
                  <div className="carousel-caption d-block d-md-block caption-background">
                    <p className="caption-font">Technology Used: React | JavaScript</p>
                    <a href="http://theclaw.netlify.com" target="blank">
                      <button className="caption-button">Live Site</button>
                    </a>
                  </div>
                </div>
                <div className="carousel-item">
                    <img
                      className="imageportfolio"
                      src={Jazz}
                      alt="Jazz Site" />
                  <div className="carousel-caption d-block d-md-block caption-background">
                    <p className="caption-font">Technology Used: React | JavaScript | CSS </p>
                    <a href="https://build-ccjcuqcccj.now.sh/" target="blank">
                      <button className="caption-button">Live Site</button>
                    </a>
                  </div>
                </div>
              </div>
              <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true" />
                <span className="sr-only">Previous</span>
              </a>
              <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true" />
                <span className="sr-only">Next</span>
              </a>
            </div>
          </section>
          <Footer />
        </body>
      </Fragment>
    )
  }
}

export default Portfolio