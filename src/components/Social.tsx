import React from 'react'
import { useStaticQuery, graphql } from 'gatsby';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Mail from './Mail';
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
    <div className="max-w-sm mx-auto flex p-6 bg-white rounded-lg shadow-xl">
      <div className="">
        <Mail btnClass="bg-blue-500" mailText="Mail Me"/>
      </div>
      <div className="">
        <a href={'https://www.instagram.com/' + site.siteMetadata.social.instagram}>
          <FontAwesomeIcon icon={['fab', 'instagram']} size="2x" />
        </a>
        <a href={'https://www.youtube.com/' + site.siteMetadata.social.youtube}>
          <FontAwesomeIcon icon={['fab', 'youtube']} size="2x" />
        </a>
        <a href={'https://linkedin.com/in/' + site.siteMetadata.social.linkedin}>
          <FontAwesomeIcon icon={['fab', 'linkedin']} size="2x" />
        </a>
        <a href={'https://www.github.com/' + site.siteMetadata.social.github}>
          <FontAwesomeIcon icon={['fab', 'github']} size="2x" />
        </a>
      </div>
    </div>
  )
}
