import React from "react"
import Layout from "../Layout"

export default function kapturalumina() {
  return (
    <Layout>
      <section id="head" className="mb-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold">
            <span>📷</span>KapturaLumina
          </h1>
          <h5 className="text-1xl mb-4">
            Aplikasi Pembelajaran Fotografi Dasar
          </h5>
          <p className="text-xs text-gray-600">
            Page Last Update : 01 June 2020
          </p>
        </div>
        <p className="mb-4">
          KapturaLumina adalah aplikasi yang saya rancang dan bangun untuk
          penelitian skripsi saya.
          <br />
          {/* The App currently only available in Indonesian language. */}
          <br />
          Saya ingin meminta bantuan teman-teman untuk menggunakan aplikasi
          tersebut kemudian mengisi form kuisioner untuk kelancaran skripsi
          saya.
        </p>
        <a
          href="#questionnaireLink"
          className="bg-green-200 text-black p-2 rounded-lg"
        >
          👇 Isi Form 👇
        </a>
      </section>
      <section id="appLink" className="mb-8">
        <h3 className="text-xl font-bold mb-1">Aplikasi KapturaLumina</h3>
        <div>
          <div className="mb-4">
            <h3>Untuk pengguna Android : </h3>
            <a
              href="https://s.id/kapturalumina_android"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="w-full sm:w-1/4 bg-teal-400 p-4 rounded-lg font-bold text-teal-900 hover:bg-teal-200 hover:text-teal-700">
                Android App
              </button>
            </a>
          </div>
          <div>
            <h3>Untuk pengguna iOS : </h3>
            <a
              href="https://kapturalumina.sznm.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="mr-2"
            >
              <button className="w-full sm:w-1/4 bg-teal-400 p-4 rounded-lg font-bold text-teal-900 hover:bg-teal-200 hover:text-teal-700">
                Web App
              </button>
            </a>
          </div>
        </div>
      </section>
      <section id="questionnaireLink">
        <h3 className="text-xl font-bold mb-1">👇👇 Form Kuisioner</h3>
        <p className="mb-1">
          Mohon isi form kuisioner berikut jika anda sudah menggunakan aplikasi
          KapturaLumina. Setiap satu respon dari Anda sangat berarti bagi saya.
        </p>
        <a
          href="https://s.id/kapturalumina_form"
          target="_blank"
          rel="noopener noreferrer"
          className="mr-2"
        >
          <button className="w-full sm:w-1/4 bg-orange-400 p-4 rounded-lg font-bold text-orange-900 hover:bg-orange-200 hover:text-orange-700">
            Isi Form
          </button>
        </a>
      </section>
    </Layout>
  )
}
