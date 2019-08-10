import React, { Component } from 'react'
import { Link } from 'gatsby';

export default class Head extends Component {
  render() {
    return (
      <header className="navbar is-black">
        <div className="navbar-brand">
          <Link to="/" className="navbar-item">
            <img src={require("../images/coconate.png")} alt=""/>
          </Link>
        </div>
      </header>
    )
  }
}
