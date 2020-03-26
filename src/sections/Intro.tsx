import React, { Component } from 'react'
import Foot from '../components/Foot'

export default class Intro extends Component {
  render() {
    return (
      <section className="" id="intro">
        {/* <img className="hero-background" src="https://source.unsplash.com/user/agustinusnathaniel" alt=""/> */}
        <div className="">
          <div className="">
            <h1 className="">Hi! <span className="" role="img">👋</span></h1>
            <h2 className="">I'm <b>Nathan</b></h2>
            {/* <p>Tech and art enthusiast.</p> */}
            {/* <br />
            <a href="#about" className="button is-dark">
              Get to Know Me More
            </a> */}
            <Foot/>
          </div>
        </div>
        <div className="">
          <div className="">
            <p>2019 - Agustinus Nathaniel</p>
          </div>
        </div>
      </section>
    )
  }
}
