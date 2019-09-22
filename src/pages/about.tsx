import React, { Component } from 'react'
import Layout from '../components/Layout';
import About from '../components/About';

export default class about extends Component {
  render() {
    return (
      <Layout hasBackground={true}>
        <About/>
      </Layout>
    )
  }
}
