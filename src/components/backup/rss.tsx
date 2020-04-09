import React from 'react'
import Layout from '../Layout'

export default function rss() {
  return (
    <Layout>
      <h1 className="text-3xl font-bold mb-8">RSS</h1>
      <div className="flex">
        <a href="https://agustinusnathaniel.com/blogrss.xml" target="_blank" rel="noopener" className="py-2 px-4 bg-blue-700 hover:bg-blue-500 rounded-lg mr-2">Personal Blog RSS</a>
        <a href="https://agustinusnathaniel.com/devrss.xml" target="_blank" rel="noopener" className="py-2 px-4 bg-teal-700 hover:bg-teal-500 rounded-lg">Dev RSS</a>
      </div>
    </Layout>
  )
}
