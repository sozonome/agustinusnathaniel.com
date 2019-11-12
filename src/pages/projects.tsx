import React, { Component } from 'react'
import Layout from '../components/Layout'
import ProjectsPage from '../sections/ProjectsPage'

export default class projects extends Component {
  render() {
    return (
      <Layout>
          <ProjectsPage/>
          <div className="container">
            
          </div>
      </Layout>
    )
  }
}
