import React, { Component } from 'react'
import Layout from '../components/Layout';
import Head from '../components/Head';
import { Link } from 'gatsby';

export default class dev404 extends Component {
  render() {
    return (
      <Layout>
        <Head />
        <div className="content has-text-centered">
          <h1 className="jumboTitle">
            404
          </h1>
          <h1>Looks like you're lost.</h1>
          <Link to="/" className="button">Let's get back</Link>
        </div>
      </Layout>
    )
  }
}
