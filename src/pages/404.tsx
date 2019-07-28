import React, { Component } from 'react'
import Layout from '../components/Layout';
import Head from '../components/Head';
import SEO from '../components/SEO';

export default class dev404 extends Component {
  render() {
    return (
      <Layout>
        <Head />
        <div className="content has-text-centered">
          404 Not Found
        </div>
      </Layout>
    )
  }
}
