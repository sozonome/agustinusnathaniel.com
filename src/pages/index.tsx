import React from 'react';
import Layout from '../components/Layout';
import { Link } from 'gatsby';
import ProjectCard from '../components/ProjectCard';

export default function IndexPage() {
  return (
    <Layout>
      <section className="hero is-fullheight-with-navbar" id="intro">
        <div className="hero-body">
          <div className="container">
            <h1 className="title is-1">Hi! 👋</h1>
            <h2 className="subtitle is-2">I'm <b>Nathan</b></h2>
            <p>Tech and art enthusiast.</p>
            <br />
            <a href="#about" className="button is-dark">
              Get to Know Me More
            </a>
          </div>
        </div>
      </section>

      <div className="hero is-fullheight-with-navbar" id="about">
        <div className="hero-body">
          <div className="container">
            <h1 className="title">Tech and Art lover</h1>
            <article className="columns">
              <div className="column is-one-fifth-tablet is-half-mobile">
                <figure className="image">
                  <img className="is-rounded" src={require("../images/avataaars.svg")} />
                </figure>
              </div>
              <div className="column is-vcentered">
                <p>I'm curious about what's behind every creations most of the time. The stories, methods, and people behind it.</p>
                <p>Solving puzzles and riddles, design and building, web sites and mobile apps development have been my interests since high school.</p>
                <p className="has-text-weight-semibold">I love to learn, create, and connect with people.</p>
              </div>
            </article>
            <br />
            <p style={{marginBottom:"10px"}}>Oh, you are looking for this, right?</p>
            <div className="buttons">
              <button disabled className="button is-dark" onClick={() => alert("Coming Soon")}>
                Curriculum Vitae
              </button>
              <a href="#projects" className="button is-dark">
                Portfolios
              </a>
            </div>
            {/* <p style={{marginTop: '-20px', marginBottom:'30px',fontSize:'11px', opacity:0.3}}>Oops, still under construction...take your time 😃</p> */}
          </div>
        </div>
      </div>

      <div className="section" id="projects">
        <h1 className="title is-1" >Projects</h1>
        <h5 className="subtitle is-5">Some previous projects I worked on</h5>
        
        <div className="section">
          <ProjectCard
            title="Personal Website"
            subtitle="agustinusnathaniel.com"
            description={<>This very website you are currently watching.<br/>A portfolio site build with Gatsby</>}
            footer={[
              {
                link: 'https://gatsbyjs.org',
                linkTitle: 'Built with Gatsby',
                image: require("../images/Gatsby-Monogram.svg")
              },
              {
                link: 'https://netlify.com',
                linkTitle: 'Hosted by Netlify',
                image: require("../images/logomark.svg")
              },
              {
                link: 'https://about.gitlab.com',
                linkTitle: 'Open-sourced in GitLab',
                image: require("../images/gitlab-icon-rgb.svg")
              }
            ]}
          />
        </div>

        <div className="section">
          <ProjectCard
            title="GA Australia Services"
            subtitle="gaaustraliaservices.com"
            subtitleLink="https://gaaustraliaservices.com"
            description={"A business page for GA Australia Services"}
          />
        </div>
      </div>
    </Layout>
  )
}