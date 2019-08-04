import React, { Component } from 'react'
import Head from './Head';
import Social from './Social';
import { Link } from 'gatsby';

export default class Intro extends Component {
  render() {
    return (
      <>
      <div className="hero-body">
        <div className="container has-text-centered">
          <h1 className="title">Hi! 👋</h1>
          <h2 className="subtitle">I'm <b>Nathan</b></h2>
          <p>Tech and Art lover</p> <br />
          <Link to="/about" className="button">
            Get to Know Me More
              </Link>
        </div>
      </div>
      <div className="hero-foot">
        <Social />
      </div>
      </>
    )
  }
}
