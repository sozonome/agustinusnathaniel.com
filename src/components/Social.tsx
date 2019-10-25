import React from 'react'
import { useStaticQuery, graphql } from 'gatsby';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faPodcast, faCamera, faHeadphones } from '@fortawesome/free-solid-svg-icons';

library.add(fab, 
  // faPodcast, faCamera, faHeadphones
);

export default function Social() {
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          social{
            instagram
            youtube
            github
            twitter
            linkedin
            medium
            unsplash
            email
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
      <div className="columns">
        <div className="column is-full-mobile">
          <a href={"mailto:" + site.siteMetadata.social.email}>
            <button className="button is-dark">Mail Me</button>
          </a>
        </div>
        <div className="column is-full socialButtonIcons">
          <a href={'https://www.instagram.com/' + site.siteMetadata.social.instagram}>
            <FontAwesomeIcon icon={['fab', 'instagram']} size="2x" />
          </a>
          <a href={'https://www.youtube.com/' + site.siteMetadata.social.youtube}>
            <FontAwesomeIcon icon={['fab', 'youtube']} size="2x" />
          </a>
          <a href={site.siteMetadata.social.linkedin}>
            <FontAwesomeIcon icon={['fab', 'linkedin']} size="2x" />
          </a>
          <a href={'https://www.github.com/' + site.siteMetadata.social.github}>
            <FontAwesomeIcon icon={['fab', 'github']} size="2x" />
          </a>
          <a href={'https://twitter.com/' + site.siteMetadata.social.twitter}>
            <FontAwesomeIcon icon={['fab', 'twitter']} size="2x" />
          </a>
        </div>
      </div>

    </>
  )
}
