import React from 'react'
import avatar from '../images/avataaars.svg'; 
import { Link } from 'gatsby';
import CV_Nathan from '../../static/CV_AgustinusNathaniel.pdf';

export default function About() {
  return (
    <div className="hero is-fullheight-with-navbar" id="about">
      <div className="hero-body">
        <div className="container">
          <h1 className="title">Tech and Art lover</h1>
          <article className="columns">
            <div className="column is-one-fifth-tablet is-half-mobile">
              <figure className="image">
                <img className="is-rounded" src={avatar} alt=""/>
              </figure>
            </div>
            <div className="column is-vcentered">
              <p>I'm curious about what's behind every creations most of the time. The stories, methods, and people behind it.</p>
              <p>Solving puzzles and riddles, design and building, web sites and mobile apps development have been my interests since high school.</p>
              <p className="has-text-weight-semibold">I love to learn, create, and connect with people.</p>
              <Link className="button is-dark" to="/stuffs">Some stuffs I'm into</Link>
            </div>
          </article>
          <br />


          <div className="container">
            <p style={{marginBottom:"10px"}}>Oh, you are looking for this, right?</p>
            <div className="buttons">
              <a href="/CV_AgustinusNathaniel.pdf" target="_blank" className="button is-black">
                Curriculum Vitae
              </a>
              <a href="#projects" className="button is-black">
                Portfolios
              </a>
            </div>
          </div>
          {/* <p style={{marginTop: '-20px', marginBottom:'30px',fontSize:'11px', opacity:0.3}}>Oops, still under construction...take your time 😃</p> */}
        </div>
      </div>
    </div>
  )
}
