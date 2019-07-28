import React, { Component } from 'react'
import { Link } from 'gatsby';

export default class Head extends Component {
  render() {
    return (
      <header className="navbar">
        <div className="container">
          <div className="navbar-brand">
            <Link to="/" className="navbar-item">
              Agustinus Nathaniel
            </Link>
          </div>
        </div>


      </header>
    )
  }
}
