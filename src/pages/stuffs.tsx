import React, { Component } from 'react'
import Layout from '../components/Layout'
import Photography from '../sections/Photography'
import GraphicDesign from '../sections/GraphicDesign'

export default class stuffs extends Component {
  render() {
    return (
      <Layout>
        <div className="section">
          <h2 className="title is-2">Stuffs I'm Into</h2>
          <h6 className="subtitle is-6">some stuffs I do</h6>
          <Photography/>
          <GraphicDesign/>
        </div>
      </Layout>
    )
  }
}
