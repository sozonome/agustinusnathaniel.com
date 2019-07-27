import React from 'react';
import Layout from '../components/Layout';

//Sections
import Head from '../components/Head';
import About from '../components/About';
import Social from '../components/Social';
import { Divider } from 'semantic-ui-react';
import BlogPosts from '../sections/BlogPosts';

export default function IndexPage() {
  return (
    <div>
      <Layout>
        <Head />
        {/* <BlogPosts/> */}
        <About />
        <Divider hidden />
        <Social />
      </Layout>
    </div>
  )
}