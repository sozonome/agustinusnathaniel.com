import React from 'react';
import Layout from '../components/Layout';
import Intro from '../sections/Intro';
import About from '../sections/About';
import Projects from '../sections/Projects';

export default function IndexPage() {
  return (
    <Layout>
      <Intro/>
      <About/>
      <Projects/>
    </Layout>
  )
}