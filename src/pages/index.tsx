import React from 'react';
import Layout from '../components/Layout';
import { Link } from 'gatsby';

export default function IndexPage() {
  return (
    <Layout>
      <section id="intro" className="items-center">
        <div className="">
          <div id="title" className="">
            <h1 className="text-3xl sm:text-4xl font-bold">Hi! 👋</h1> 
            <h1 className="text-3xl sm:text-4xl font-bold">I'm <span className="text-orange-700">Nathan</span></h1>
          </div>
          <div className="mt-4 text-sm sm:text-lg">
            <p>I'm a tech and design enthusiast.</p>
            <div className="mt-4 text-lg">
              <Link to="/about" className="py-2 px-4 bg-orange-600 rounded hover:bg-green-600">About Me</Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}