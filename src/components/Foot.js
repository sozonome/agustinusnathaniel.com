import React from 'react'
import { library, config } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useStaticQuery, Link } from 'gatsby';
import {graphql} from 'gatsby';

config.autoAddCss = false;
library.add(fab);

export default function Foot() {
  const { site } = useStaticQuery(graphql`
    query{
      site{
        siteMetadata{
          social{
            instagram
            youtube
            github
            twitter
            linkedin
            medium
            email
            behance
            spotify
          }
        }
      }
    }
  `);

  return (
    <div className="w-full self-end text-gray-600">
      <div className="sm:flex items-center px-6 pt-2 sm:pt-0 sm:py-0">
        <div className="sm:flex w-full sm:w-1/2 sm:justify-start mt-2 mb-4 sm:my-0">
          <div className="flex items-center justify-center">
            <Link to="/projects" className="hover:text-gray-300 mr-4">Projects / Portfolios</Link>
            {/* <Link to="/rss" className="hover:text-gray-300">RSS</Link> */}
          </div>
        </div>
        <div className="sm:flex w-full sm:justify-end">
          <div className="flex items-center justify-center">
            <a href={'https://www.instagram.com/' + site.siteMetadata.social.instagram} className="w-8 hover:text-white" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={['fab', 'instagram']} size="1x"/>
            </a>
            <a href={"https://youtube.com/" + site.siteMetadata.social.youtube} className="w-8 ml-2 hover:text-white" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={['fab', 'youtube']} size="2x"/>
            </a>
            <a href={"https://twitter.com/" + site.siteMetadata.social.twitter} className="w-8 ml-2 hover:text-white" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={['fab', 'twitter']} size="2x"/>
            </a>
            <a href={"https://linkedin.com/in/" + site.siteMetadata.social.linkedin} className="w-8 ml-2 hover:text-white" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={['fab', 'linkedin']} size="2x"/>
            </a>
            <a href={"https://github.com/" + site.siteMetadata.social.github} className="w-8 ml-2 hover:text-white" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={['fab', 'github']} size="2x"/>
            </a>
            <a href={"https://open.spotify.com/user/" + site.siteMetadata.social.spotify} className="w-8 ml-2 hover:text-white" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={['fab', 'spotify']} size="2x"/>
            </a>
          </div>
        </div>
      </div>
      <div className="px-6 py-2 flex sm:block w-full sm:w-1/2 py-4 justify-center">
        <p className="text-xs">&copy; Copyright 2020. Agustinus Nathaniel</p>
      </div>
    </div>
    
  )
}
