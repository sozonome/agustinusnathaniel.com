import React, { Component } from 'react'
import { library, config } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useStaticQuery } from 'gatsby';

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
          }
        }
      }
    }
  `);

  return (
    <div className="sm:flex text-gray-600 bg-gray-900 sm:bg-black h-30 sm:h-16 items-center px-6 pb-6 sm:pb-2">
      <div className="flex sm:block w-full sm:w-1/2 py-4 sm:py-0 justify-center">
        <p className="text-xs">&copy; Copyright 2020. Agustinus Nathaniel</p>
      </div>
      <div className="sm:flex w-full sm:w-1/2 sm:justify-end">
        <div className="flex items-center justify-center">
          <a href="" className="w-8 hover:text-white">
            <FontAwesomeIcon icon={['fab', 'instagram']} size="1x"/>
          </a>
          <a href="" className="w-8 ml-2 hover:text-white">
            <FontAwesomeIcon icon={['fab', 'youtube']} size="2x"/>
          </a>
          <a href="" className="w-8 ml-2 hover:text-white">
            <FontAwesomeIcon icon={['fab', 'linkedin']} size="2x"/>
          </a>
          <a href="" className="w-8 ml-2 hover:text-white">
            <FontAwesomeIcon icon={['fab', 'github']} size="2x"/>
          </a>
        </div>
      </div>
    </div>
  )
}
