import React from 'react';
import Layout from '../components/Layout';
import Intro from '../sections/Intro';
import About from '../sections/About';
import ProjectsHome from '../sections/ProjectsHome';

export default function IndexPage() {
  return (
    <Layout>
      <Intro/>
      {/* <About/>
      <ProjectsHome/> */}
    </Layout>
  )
}