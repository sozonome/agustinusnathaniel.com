import React, { Component } from 'react'
import Head from './Head';
import { Link } from 'gatsby';

export default class About extends Component {
  render() {
    return (
      <>
        <div className="hero-body">
          <div className="container">
            <h1 className="title">Tech and Art lover</h1>
            <article className="media">
              <div className="media-left image">
                <img className="is-rounded" src={require("../images/avatar.jpeg")} />
              </div>
              <div className="media-content">
                <p>Have you ever wondered how something is built? What's the story behind of a movie? How does a product can be known and bought by customers without even interacting directly? Well, I'm that kinda of person. I love to know what's behind every creations. The stories, methods, and people behind it.</p>
                <p className="has-text-weight-semibold">I love to learn, create, and connect with people.</p>
              </div>
            </article>
          </div>
        </div>
        <div className="hero-foot">
          <div className="section">
            <div className="container has-text-centered">
              <Link className="button" to="/links">
                Find Me Here
              </Link>
            </div>
          </div>
        </div>
      </>
    )
  }
}
