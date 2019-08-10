import React from 'react'
import { useStaticQuery, graphql } from 'gatsby';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPodcast, faCamera, faHeadphones } from '@fortawesome/free-solid-svg-icons';

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
    <>
      <div className="hero-body">
        <div className="container">
          <div className="title">Find Me Here</div>
          <div className="container">
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
                  <a href={'https://www.unsplash.com/' + site.siteMetadata.social.unsplash}>
                    <FontAwesomeIcon icon={faCamera} size="2x" />
                  </a>
                </div>
                <div className="level-item">
                  <a href={'https://www.github.com/' + site.siteMetadata.social.github}>
                    <FontAwesomeIcon icon={['fab', 'github']} size="2x" />
                  </a>
                </div>
                <div className="level-item">
                  <a href={site.siteMetadata.social.spotify_podcast}>
                    <FontAwesomeIcon icon={['fab', 'spotify']} size="2x" />
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
      <div className="hero-foot">
        <footer className="footer">
          <div className="container">
            Updated July 2019
          </div>
        </footer>
      </div>
    </>
  )
}
