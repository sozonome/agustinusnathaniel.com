import React, { Component } from 'react'

const unsplashLink = 'https://unsplash.com/photos/';
const unsplashSource = 'https://source.unsplash.com/';

const photosId = [
  'z7DOkiIbtcw',
  '3Px7BvaoO0c',
  'onfPvTDoO9k',
  'xYfhRemMRMY',
  'Z96okuOmPos',
  '_An7lXy4aa4'
]

export default class Photography extends Component {
  render(){
    return (
      <div className="container sect">
        <h4 className="title is-4">Photography & Videography</h4>
        <div className="tile is-ancestor">
          <div className="tile is-vertical is-8">
            <div className="tile">
              <div className="tile is-parent is-vertical">
                <article className="tile is-child">
                  <a href={unsplashLink + photosId[0]} target="_blank">
                    <img src={unsplashSource + photosId[0]} alt=""/>
                  </a>
                </article>
                <article className="tile is-child">
                  <a href={unsplashLink + photosId[1]} target="_blank">
                    <img src={unsplashSource + photosId[1]} alt=""/>
                  </a>
                </article>
              </div>
              <div className="tile is-parent">
                <article className="tile is-child">
                  <a href={unsplashLink + photosId[2]} target="_blank">
                    <img src={unsplashSource + photosId[2]} alt=""/>
                  </a>
                </article>
              </div>
            </div>
            
            <div className="tile is-parent">
              <article className="tile is-child">
                <a href={unsplashLink + photosId[3]} target="_blank">
                  <img src={unsplashSource + photosId[3]} alt=""/>
                </a>
              </article>
            </div>
          </div>
          <div className="tile is-parent is-4 is-vertical">
            <article className="tile is-child">
              <a href={unsplashLink + photosId[4]} target="_blank">
                <img src={unsplashSource + photosId[4]} alt=""/>
              </a>
            </article>
            <article className="tile is-child notification is-dark">
              <a href="https://www.instagram.com/cherocaptures" target="_blank">CheroCaptures</a> <br/>
              <a href="https://www.instagram.com/appalacreations" target="_blank">AppalaCreations</a> <br/>
              
            </article>
          </div>
        </div>
      </div>
    )
  }
}
