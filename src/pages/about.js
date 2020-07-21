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
          <div>
            <h2 className="text-2xl font-bold mt-12 text-teal-400">Lists</h2>
            <h4 className="text-1xl font-semibold mb-2">
              Some lists or recommendations of stuffs I like and/or use.
            </h4>
            <div className="mb-4 text-md">
              <ul>
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
