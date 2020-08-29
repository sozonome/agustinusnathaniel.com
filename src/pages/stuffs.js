import React from "react"

import Layout from "../components/Layout"

import sznmicon from "../images/avataaars.svg"
import LinkButton from "../components/LinkButton"

const stuffs = () => {
  return (
    <Layout>
      <h1 className="text-3xl font-bold">Some Stuffs I'm Working On</h1>
      <section className="my-4">
        <div>
          <LinkButton href="https://sznm.dev">
            <div className="bg-gray-800 hover:bg-gray-700 p-4 rounded-lg mb-4">
              <div className="flex items-center">
                <img src={sznmicon} className="w-12 mr-4" alt="sozonome" />
                <div>
                  <h2 className="text-2xl font-bold">sozonome</h2>
                  <p className="text-sm">
                    My personal dev site and projects showcase.
                  </p>
                </div>
              </div>
            </div>
          </LinkButton>
          {/* <a
            href="https://www.instagram.com/cherocaptures"
            rel="noopener noreferrer"
            target="_blank"
          >
            <div className="bg-gray-800 hover:bg-gray-700 p-4 rounded-lg mb-4">
              <div className="flex items-center">
                <img
                  src={cherocapturesicon}
                  className="w-12 h-12 mr-4 rounded-full"
                />
                <div>
                  <h2 className="text-2xl font-bold">Chero Captures</h2>
                  <p className="text-sm">
                    Photography and Videography services ready to cherish your
                    events or life moments.
                  </p>
                </div>
              </div>
            </div>
          </a> */}
          <p className="text-sm">More stuffs will be added soon, stay tuned.</p>
        </div>
      </section>
    </Layout>
  )
}

export default stuffs
