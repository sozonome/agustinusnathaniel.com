import React from 'react'
import Head from './Head';
import { useStaticQuery, graphql } from 'gatsby';
import {library} from '@fortawesome/fontawesome-svg-core';
import {fab} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPodcast, faCamera, faHeadphones} from '@fortawesome/free-solid-svg-icons';

library.add(fab, faPodcast, faCamera, faHeadphones);

export default function Links() {
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          social{
            instagram
            youtube
            linkedin
            github
            medium
            unsplash
            email
            twitter
            devto
            behance
            dribbble
            apple_podcast
            spotify_podcast
            spotify_playlist
          }
        }
      }
    }
  `);

  return (
    <div className="hero is-fullheight">
      <div className="hero-head">
        <Head />
      </div>

      <div className="hero-body">
        <div className="container">
          <div className="title">Find Me Here</div>
          <div className="container">
            <div className="container">
              <h5 className="title is-5">Visuals</h5>
              <div className="level is-mobile">
                <div className="level-left">
                  <div className="level-item">
                    <a href={'https://www.instagram.com/' + site.siteMetadata.social.instagram}>
                      <FontAwesomeIcon icon={['fab', 'instagram']} size="2x" />
                    </a>
                  </div>
                  <div className="level-item">
                    <a href={'https://www.youtube.com/' + site.siteMetadata.social.youtube}>
                      <FontAwesomeIcon icon={['fab', 'youtube']} size="2x" />
                    </a>
                  </div>
                  <div className="level-item">
                    <a href={'https://be.net/' + site.siteMetadata.social.behance}>
                      <FontAwesomeIcon icon={['fab', 'behance']} size="2x" />
                    </a>
                  </div>
                  <div className="level-item">
                    <a href={'https://www.dribbble.com/' + site.siteMetadata.social.dribbble}>
                      <FontAwesomeIcon icon={['fab', 'dribbble']} size="2x" />
                    </a>
                  </div>
                  <div className="level-item">
                    <a href={'https://www.unsplash.com/' + site.siteMetadata.social.unsplash}>
                      <FontAwesomeIcon icon={faCamera} size="2x" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <br/>
            <div className="container">
              <h5 className="title is-5">Tech</h5>
              <div className="level is-mobile">
                <div className="level-left">
                  <div className="level-item">
                    <a href={'https://www.github.com/' + site.siteMetadata.social.github}>
                      <FontAwesomeIcon icon={['fab', 'github']} size="2x" />
                    </a>
                  </div>
                  <div className="level-item">
                    <a href={'https://www.dev.to/' + site.siteMetadata.social.devto}>
                      <FontAwesomeIcon icon={['fab', 'dev']} size="2x" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <br/>
            <div className="container">
              <h5 className="title is-5">Journals</h5>
              <div className="level is-mobile">
                <div className="level-left">
                <div className="level-item">
                    <a href={'https://linkedin.com/in/' + site.siteMetadata.social.linkedin}>
                      <FontAwesomeIcon icon={['fab', 'linkedin']} size="2x" />
                    </a>
                  </div>
                  <div className="level-item">
                    <a href={'https://www.medium.com/' + site.siteMetadata.social.medium}>
                      <FontAwesomeIcon icon={['fab', 'medium']} size="2x" />
                    </a>
                  </div>
                  <div className="level-item">
                    <a href={site.siteMetadata.social.apple_podcast}>
                      <FontAwesomeIcon icon={faPodcast} size="2x" />
                    </a>
                  </div>
                  <div className="level-item">
                    <a href={site.siteMetadata.social.spotify_podcast}>
                      <FontAwesomeIcon icon={['fab','spotify']} size="2x" />
                    </a>
                  </div>
                  <div className="level-item">
                    <a href={site.siteMetadata.social.spotify_playlist}>
                      <FontAwesomeIcon icon={faHeadphones} size="2x" />
                    </a>
                  </div>
                  <div className="level-item">
                    <a href={'https://twitter.com/' + site.siteMetadata.social.twitter}>
                      <FontAwesomeIcon icon={['fab', 'twitter']} size="2x" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="hero-foot">
        <footer className="footer">
          <div className="container">
            Updated July 2019
          </div>
        </footer>
      </div>
    </div>
  )
}
