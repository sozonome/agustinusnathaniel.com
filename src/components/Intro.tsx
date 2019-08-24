import React, { Component } from 'react'
import Head from './Head';
import Social from './Social';
import { Link } from 'gatsby';

export default class Intro extends Component {
  render() {
    return (
      <div className="container">
        <h1 className="title is-1">Hi! 👋</h1>
        <h2 className="subtitle is-2">I'm <b>Nathan</b></h2>
        <p>Tech and art enthusiast.</p>
        <br />
        <Link to="/about" className="button is-dark">
          Get to Know Me More
          </Link>
        <p className="has-text-weight-light" style={{ fontSize: "10px", marginTop: "20px" }}>
          This site is still under construction. Please be kind with it.
          </p>
      </div>
    )
  }
}
