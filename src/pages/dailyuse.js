import React from 'react'
import Layout from '../components/Layout'
import { Link } from 'gatsby'

export default function dailyuse() {
  return (
    <Layout>
      <h1 className="text-4xl font-bold">Stuffs I use daily</h1>
      <p className="text-lg font-semibold mb-6">List of stuffs I currently use on daily basis.</p>
      <section id="tech" className="mb-6">
        <h2 className="text-2xl font-bold">Computer</h2>
        <ul className="list-disc px-5">
          <li>
            <a href="https://www.asus.com/Laptops/ROG-GL552VW/" className="text-indigo-400 hover:text-indigo-200 hover:underline hover:font-bold" target="_blank" rel="noopener noreferrer">ASUS RoG GL552VW</a>
          </li>
          <li>
            <a href="https://www.logitech.com/id-id/product/m170-m171-wireless-mouse" className="text-indigo-400 hover:text-indigo-200 hover:underline hover:font-bold" target="_blank" rel="noopener noreferrer">Logitech M170 Wireless Mouse</a>
          </li>
          <li>
            <a href="https://code.visualstudio.com/" className="text-indigo-400 hover:text-indigo-200 hover:underline hover:font-bold" target="_blank" rel="noopener noreferrer">Visual Studio Code</a>
          </li>
          <li>
            <a href="https://www.sourcetreeapp.com/" className="text-indigo-400 hover:text-indigo-200 hover:underline hover:font-bold" target="_blank" rel="noopener noreferrer">SourceTree</a>
          </li>
        </ul>
      </section>
      <section id="productivity" className="mb-6">
        <h2 className="text-2xl font-bold">Productivity</h2>
        <ul className="list-disc px-5">
          <li>
            <a href="https://evernote.com/" className="text-green-400 hover:text-green-200 hover:underline hover:font-bold" target="_blank" rel="noopener noreferrer">Evernote</a>
          </li>
          <li>
            <a href="https://notion.so" className="text-green-400 hover:text-green-200 hover:underline hover:font-bold" target="_blank" rel="noopener noreferrer">Notion</a>
          </li>
          <li>
            <a href="https://trello.com/" className="text-green-400 hover:text-green-200 hover:underline hover:font-bold" target="_blank" rel="noopener noreferrer">Trello</a>
          </li>
          <li>
            <a href="https://www.google.com/calendar/about/" className="text-green-400 hover:text-green-200 hover:underline hover:font-bold" target="_blank" rel="noopener noreferrer">Google Calendar</a>
          </li>
        </ul>
      </section>
      {/* <section id="photoVideo" className="mb-6">
        <h2 className="text-2xl font-bold">Shooting Gears</h2>
        <p>Check out my shooting gears <a href="https://kit.co/agustinusnathaniel" className="text-teal-400 hover:text-teal-200 hover:underline hover:font-bold" target="_blank" rel="noopener noreferrer">here</a>.</p>
      </section> */}
      <section id="sitestack">
        <h2 className="text-2xl font-bold">Site Stacks</h2>
        <Link to="/sitestack" className="text-green-400 hover:text-green-200 hover:underline hover:font-bold">Wanna know which stacks I use to build this site?</Link>
      </section>
    </Layout>
  )
}
