import React from 'react'
import { useStaticQuery, graphql } from 'gatsby';
import { fab } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from '@fortawesome/fontawesome-svg-core';

library.add(fab)

export default function Social() {
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
            email
            twitter
            behance
            dribbble
          }
        }
      }
    }
  `);

  return (
    <div className="section">
      <div className="container">
        <div className="level is-mobile">
          <div className="level-item has-text-centered">
            <a href={"mailto:" + site.siteMetadata.social.email}>
              <button className="button">Mail Me</button>
            </a>
          </div>
          <div className="level-item has-text-centered">
            <a href={'https://www.instagram.com/' + site.siteMetadata.social.instagram}>
              <FontAwesomeIcon icon={['fab', 'instagram']} size="2x" />
            </a>
          </div>
          <div className="level-item has-text-centered">
            <a href={'https://www.youtube.com/' + site.siteMetadata.social.youtube}>
              <FontAwesomeIcon icon={['fab', 'youtube']} size="2x" />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
