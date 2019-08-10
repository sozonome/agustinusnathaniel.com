import React, { Component } from 'react'
import Head from './Head';
import Social from './Social';
import { Link } from 'gatsby';

export default class Intro extends Component {
  render() {
    return (
      <>
        <div className="section">
          <h1 className="title is-1">Hi! 👋</h1>
          <h2 className="subtitle is-2">I'm <b>Nathan</b></h2>
          <p>I'm a tech and art enthusiast. Currently pursuing to be a web developer. </p>
          <br />
          <Link to="/about" className="button is-dark">
            Get to Know Me More
          </Link>
        </div>
      </>
    )
  }
}
