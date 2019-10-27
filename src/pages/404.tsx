import React, { Component } from 'react'
import Layout from '../components/Layout';
import { Link } from 'gatsby';

export default class dev404 extends Component {
  render() {
    return (
      <Layout>
        <div className="section">
          <h1 className="jumboTitle">
            404
          </h1>
          <h1 className="title is-1">Looks like you're lost.</h1>
          <Link to="/" className="button is-dark">Let's get back</Link>
        </div>
      </Layout>
    )
  }
}
