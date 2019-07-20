import React from 'react';
import Layout from '../components/Layout';

//Sections
import Head from '../components/Head';
import About from '../components/About';
import Social from '../components/Social';

export default function IndexPage() {
  return (
    <Layout>
      <Head/>
      <About/>
      <Social/>
    </Layout>
  )
}