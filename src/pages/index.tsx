import React from 'react';
import Layout from '../components/Layout';
import Intro from '../components/Intro';
import About from '../components/About';

export default function IndexPage() {
  return (
    <Layout>
      <Intro/>
      <About/>
    </Layout>
  )
}