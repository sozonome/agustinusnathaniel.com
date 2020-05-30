import React from "react"
import Layout from "../components/Layout"
import { Link } from "gatsby"

export default function IndexPage() {
  return (
    <Layout>
      <section id="intro" className="items-center">
        <div className="">
          <div id="title" className="">
            <h1 className="text-3xl sm:text-4xl font-bold">
              Hi!{" "}
              <span role="img" aria-label="hand-waving">
                👋
              </span>
            </h1>
            <h1 className="text-3xl sm:text-4xl font-bold">
              I'm <span className="text-orange-700">Nathan</span>
            </h1>
          </div>
          <div className="mt-4 text-sm sm:text-lg">
            <p>Tech and design enthusiast.</p>
            <div className="flex mb-12">
              <div className="mt-4 text-lg mr-2">
                <Link
                  to="/about"
                  className="py-2 px-4 bg-orange-600 rounded hover:bg-green-600"
                >
                  About Me
                </Link>
              </div>
              <div className="mt-4 text-lg">
                <Link
                  to="/blog"
                  className="py-2 px-4 bg-blue-600 rounded hover:bg-green-600"
                >
                  Blog
                </Link>
              </div>
            </div>
            <div>
              <div className="mt-4 text-2xl">
                <p className="mb-2"><span>👇👇👇👇👇</span></p> 
                <Link
                  to="/kapturalumina"
                  className="font-bold py-2 px-4 bg-teal-600 rounded hover:bg-green-600"
                >
                  Help Me
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}
