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
          <section className="portfoliosection">


            <div>
              <a href="https://fun-food-friends-d09e7.firebaseapp.com/" target="blank"><img
                src={ShoppingBrain}
                alt="Shopping Brain" className="imageportfolio" /></a>
              <p>Shopping App "Shopping Brain"</p>
            </div>

            <div>
              <a href="https://fetch.netlify.com/" target="blank"><img
                src={Fetch}
                alt="Fetch Website" className="imageportfolio" /></a>
              <p>fetch.netlify.com</p>
            </div>

            <div>
              <a href="https://newsamp.netlify.com/" target="blank"><img
                src={SAMP}
                alt="Smile At My Profile" className="imageportfolio" /></a>
              <p>Smile At My Profile</p>
            </div>

            <div>
              <a href="https://github.com/dtzimmer/vidly" target="blank"><img
                src={Vidly}
                alt="Vidly" className="imageportfolio" /></a>
              <p>Vidly - Backend (See on Github)</p>
            </div>

            <div>
              <a href="http://theclaw.netlify.com" target="blank"><img
                src={THECLAW}
                alt="Shopping Brain" className="imageportfolio" /></a>
              <p>Random Name Chooser</p>
            </div>

            <div>
              <a href="https://build-ccjcuqcccj.now.sh/" target="blank"><img
                src={Jazz}
                alt="Utah Jazz Site" className="imageportfolio" /></a>
              <p>Utah Jazz Fan Site</p>
            </div>
          </section>
          <Footer />
        </body>
      </Fragment>
    )
  }
}

export default Portfolio