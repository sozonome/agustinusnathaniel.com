import React, { Component } from 'react'
import Layout from '../components/Layout';
import { Link } from 'gatsby';

export default class dev404 extends Component {
  render() {
    return (
      <Layout>
        <div className="px-2">
          <h1 className="text-6xl font-extrabold">
            404
          </h1>
          <h1 className="text-lg mb-4">Looks like you're lost.</h1>
          <Link to="/" className="p-2 text-md bg-blue-700 px-2 rounded-md hover:bg-blue-300 hover:text-teal-700">Let's get back</Link>
        </div>
      </Layout>
    )
  }
}
