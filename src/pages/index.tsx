import React from 'react';
import Layout from '../components/Layout';
import { Link } from 'gatsby';

export default function IndexPage() {
  return (
    <Layout>
      <section className="hero is-fullheight-with-navbar">
        <div className="hero-body">
          <div className="container">
            <h1 className="title is-1">Hi! 👋</h1>
            <h2 className="subtitle is-2">I'm <b>Nathan</b></h2>
            <p>Tech and art enthusiast.</p>
            <br />
            <Link to="/about" className="button is-dark">
              Get to Know Me More
            </Link>
          </div>
        </div>
      </section>

      <div className="section">
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
        <p style={{marginBottom:"10px", opacity:0.3}}>Oh, you are looking for this, right?</p>
        <div className="buttons">
          <button disabled className="button is-dark" onClick={() => alert("Coming Soon")}>
            Curriculum Vitae
          </button>
          <button disabled className="button is-dark" onClick={() => alert("Coming Soon")}>
            Portfolios
          </button>
        </div>
        <p style={{marginTop: '-20px', marginBottom:'30px',fontSize:'11px', opacity:0.3}}>Oops, still under construction...take your time 😃</p>
      </div>
    </Layout>
  )
}