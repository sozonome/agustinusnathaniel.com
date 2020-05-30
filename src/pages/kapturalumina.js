import React from "react"
import Layout from "../components/Layout"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { library, config } from "@fortawesome/fontawesome-svg-core"
import { fab, faGooglePlay } from "@fortawesome/free-brands-svg-icons"

config.autoAddCss = false
library.add(fab)

export default function kapturalumina() {
  return (
    <Layout>
      <div>
        <div className="mb-8">
          <h1 className="text-3xl font-bold">
            <span>📷</span>KapturaLumina
          </h1>
          <h5 className="text-1xl mb-4">Basic Photography Learning App</h5>
          <p className="text-xs text-gray-600">
            Page Last Update : 30 May 2020
          </p>
        </div>
        <p className="mb-2">
          KapturaLumina is part of my Bachelor Thesis.
          <br/>
          The App currently only available in Indonesian language.
          <br />
          If you want to help me, please try the App for a while and then fill
          in the questionaire form.
        </p>
        <div>
          <div className="mb-2">
            <h3 className="text-xl font-bold mb-1">The App</h3>
            <a
              href="https://kapturalumina.sznm.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="mr-2"
            >
              <button className="bg-teal-400 p-4 rounded-lg font-bold text-teal-900 hover:bg-teal-200 hover:text-teal-700">
                Web App
              </button>
            </a>
            <a
              href="https://sznm.dev/kapturalumina/android/app-release.apk"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button
                disabled={true}
                className="bg-teal-400 p-4 rounded-lg font-bold text-teal-900 hover:bg-teal-200 hover:text-teal-700"
              >
                <div className="flex">
                  <FontAwesomeIcon
                    icon={faGooglePlay}
                    size="sm"
                    style={{ height: "20px" }}
                    className="mr-2"
                  />
                  Android App
                </div>
              </button>
            </a>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-1">Questionaire Form</h3>
            <p className="mb-1">If you have used the app, I'm very thankful if you can fill in the questionaire form.</p>
            <a
              href="https://s.id/KapturaLuminaForm"
              target="_blank"
              rel="noopener noreferrer"
              className="mr-2"
            >
              <button className="bg-orange-400 p-4 rounded-lg font-bold text-orange-900 hover:bg-orange-200 hover:text-orange-700">
                Let's Go!
              </button>
            </a>
          </div>
        </div>
      </div>
    </Layout>
  )
}
