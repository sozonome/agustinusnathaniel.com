import React from 'react'
import Layout from '../components/Layout'

export default function sitestack() {
  return (
    <Layout>
      <h1 className="text-4xl font-bold">Site Stacks</h1>
      <p className="text-lg font-semibold mb-6">Tech stacks I use to build this site you are currently seeing.</p>
      <section id="frameworks" className="mb-6">
        <h2 className="text-2xl font-bold">Frameworks</h2>
        <ul className="list-disc px-5">
          <li>
            <a href="https://www.gatsbyjs.org/" className="text-purple-400 hover:text-purple-200 hover:underline hover:font-bold" target="_blank" rel="noopener noreferrer">GatsbyJS</a>
          </li>
          <li>
            <a href="https://tailwindcss.com/" className="text-teal-400 hover:text-teal-200 hover:underline hover:font-bold" target="_blank" rel="noopener noreferrer">Tailwind CSS</a>
          </li>
        </ul>
      </section>
      <section id="deployHosting" className="mb-6">
        <h2 className="text-2xl font-bold">Deployment, Hosting, & Domain</h2>
        <ul className="list-disc px-5">
          <li>
            <a href="https://www.netlify.com/" className="text-teal-400 hover:text-teal-200 hover:underline hover:font-bold" target="_blank" rel="noopener noreferrer">Netlify (Hosting and Deployment)</a>
          </li>
          <li>
            <a href="https://gitlab.com/" className="text-orange-400 hover:text-orange-200 hover:underline hover:font-bold" target="_blank" rel="noopener noreferrer">GitLab</a>
          </li>
          <li>
            <a href="https://www.rumahweb.com/" className="text-blue-400 hover:text-blue-200 hover:underline hover:font-bold" target="_blank" rel="noopener noreferrer">RumahWeb (Domain)</a>
          </li>
        </ul>
      </section>
      <section id="performance">
        <h2 className="text-2xl font-bold">Web Performance</h2>
        <ul className="list-disc px-5">
          <li>
            <a href="https://analytics.google.com/analytics/web/" className="text-teal-400 hover:text-teal-200 hover:underline hover:font-bold" target="_blank" rel="noopener noreferrer">Google Analytics</a>
          </li>
        </ul>
      </section>
    </Layout>
  )
}
