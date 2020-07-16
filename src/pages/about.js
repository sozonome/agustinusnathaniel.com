import React from "react"
import Layout from "../components/Layout"
import { Link } from "@reach/router"
import { useStaticQuery, graphql } from "gatsby"
import profileImg from "../images/profile.jpg"

export default function About() {
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          social {
            instagram
            youtube
            github
            twitter
            linkedin
            medium
            email
            behance

            devInstagram
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <div>
        <h1 className="text-3xl font-bold">About me</h1>
        {/* <p className="text-xs text-gray-600">
          Last update : April 2020. <br /> (in progress doing bachelor thesis
          ✌️)
        </p> */}
        <section id="intro" className="mt-4">
          <p className="mb-4 text-md">
            Hi! I'm{" "}
            <a
              href={
                "https://www.instagram.com/" +
                site.siteMetadata.social.instagram
              }
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 text-orange-600 hover:text-blue-400 underline hover:font-bold"
            >
              Agustinus Nathaniel
            </a>
            , also known as{" "}
            <a
              href={
                "https://www.instagram.com/" +
                site.siteMetadata.social.devInstagram
              }
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 text-orange-600 hover:text-blue-400 underline hover:font-bold"
            >
              @sozonome.
            </a>
            <br />I love to explore and learn stuffs around technology and
            design. I believe experiences + mistakes are the greatest teacher
            and learning is a lifetime process.
          </p>
          <img
            className="w-1/2 rounded-lg mb-4"
            src={profileImg}
            alt=""
            srcset=""
          />
          {/* <h2 className="text-2xl font-semibold mb-2">Beside Tech...</h2>
          <div className="mb-4 text-sm">
            I also do photography and videography.
            <br />
            <div className="mb-2">
              (Check out my works <a href="https://www.instagram.com/cherocaptures" className="text-blue-300 font-semibold underline hover:text-blue-200" target="_blank">here</a>.)
            </div>
            I share my personal shoots (mainly travel content) on my{" "}
            <a
              href={
                "https://www.instagram.com/" +
                site.siteMetadata.social.instagram
              }
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 text-orange-600 hover:text-blue-400 underline hover:font-bold"
            >
              Instagram
            </a>
            .
            <div className="mt-2 text-xs">
              N.B. Yeah I'm so used to people assumed myself as a film /
              photography student{" "}
              <span role="img" aria-label="laugh">
                😂
              </span>
              .
            </div>
          </div> */}
          <div>
            <h2 className="text-2xl font-bold mt-12">Some Documents</h2>
            <div className="mt-4">
              <a
                className="bg-teal-700 p-2 rounded-lg hover:bg-teal-400 hover:text-gray-700"
                href="/CV_AgustinusNathaniel.pdf"
                rel="noopener noreferrer"
                target="_blank"
              >
                CV - Resume
              </a>
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-bold mt-12 text-teal-400">Lists</h2>
            <h4 className="text-1xl font-semibold mb-2">
              Some lists or recommendations of stuffs I like and/or use.
            </h4>
            <div className="mb-4 text-md">
              <ul>
                <li className="mb-2">
                  <Link
                    to="/dailyuse"
                    className="text-teal-500 hover:text-teal-200 font-semibold hover:underline"
                  >
                    What I use daily
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    to="/sitestack"
                    className="text-teal-500 hover:text-teal-200 font-semibold hover:underline"
                  >
                    This site stacks
                  </Link>
                </li>
                <li>
                  <a
                    href="https://sozonome.github.io/bookmarks"
                    className="text-teal-500 hover:text-teal-200 font-semibold hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Bookmarks
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section id="content-foot"></section>
      </div>
    </Layout>
  )
}
