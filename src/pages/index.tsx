import React from 'react';
import Layout from '../components/Layout';

export default function IndexPage() {
  return (
    <Layout>
      <div className="px-6 justify-center h-screen">
        <div className="sm:flex items-end">
          <h1 className="flex w-full sm:w-1/2 text-5xl sm:text-6xl font-bold sm:justify-end">Hi! 👋</h1>
          <h2 className="w-full sm:w-1/2 text-4xl sm:text-5xl font-semibold">I'm <span className="font-bold">Nathan</span></h2>
        </div>
      </div>
    </Layout>
  )
}