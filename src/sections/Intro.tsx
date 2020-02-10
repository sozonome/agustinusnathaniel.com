import React, { Component } from 'react'
import Foot from '../components/Foot'

export default class Intro extends Component {
  render() {
    return (
      <section className="hero is-fullheight-with-navbar" id="intro">
        <div className="hero-body">
          <div className="container has-text-centered">
            <h1 className="title is-1">Hi! <span className="darkmode-ignore" role="img">👋</span></h1>
            <h2 className="subtitle is-2">I'm <b>Nathan</b></h2>
            {/* <p>Tech and art enthusiast.</p> */}
            {/* <br />
            <a href="#about" className="button is-dark">
              Get to Know Me More
            </a> */}
          </div>
        </div>
        <div className="hero-foot">
          <Foot/>
        </div>
      </section>
    )
  }
}
