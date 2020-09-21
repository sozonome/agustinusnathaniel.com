import React from "react"
import { Link } from "gatsby"
import { library, config } from "@fortawesome/fontawesome-svg-core"
import { fab } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import LinkButton from "./LinkButton"

import { useSiteMetadata } from "../queries/siteQuery"

config.autoAddCss = false
library.add(fab)

export default function Foot() {
  const { social } = useSiteMetadata()

  return (
    <div className="w-full self-end text-gray-600">
      <div className="sm:flex items-center px-6 pt-2 sm:pt-0 sm:py-0">
        <div className="sm:flex w-full sm:w-1/2 sm:justify-start mt-2 mb-4 sm:my-0">
          <div className="flex items-center justify-center">
            <Link to="/stuffs" className="hover:text-gray-300 mr-4">
              Stuffs
            </Link>
            <Link to="/rss.xml" className="hover:text-gray-300">
              RSS
            </Link>
          </div>
        </div>
        <div className="sm:flex w-full sm:justify-end">
          <div className="flex items-center justify-center">
            <LinkButton
              href={"https://www.instagram.com/" + social.instagram}
              className="w-8 hover:text-white"
            >
              <FontAwesomeIcon icon={["fab", "instagram"]} size="1x" />
            </LinkButton>
            <LinkButton
              href={"https://youtube.com/" + social.youtube}
              className="w-8 ml-2 hover:text-white"
            >
              <FontAwesomeIcon icon={["fab", "youtube"]} size="2x" />
            </LinkButton>
            <LinkButton
              href={"https://twitter.com/" + social.twitter}
              className="w-8 ml-2 hover:text-white"
            >
              <FontAwesomeIcon icon={["fab", "twitter"]} size="2x" />
            </LinkButton>
            <LinkButton
              href={"https://linkedin.com/in/" + social.linkedin}
              className="w-8 ml-2 hover:text-white"
            >
              <FontAwesomeIcon icon={["fab", "linkedin"]} size="2x" />
            </LinkButton>
            <LinkButton
              href={"https://github.com/" + social.github}
              className="w-8 ml-2 hover:text-white"
            >
              <FontAwesomeIcon icon={["fab", "github"]} size="2x" />
            </LinkButton>
            {/* <LinkButton
              href={
                "https://open.spotify.com/user/" +
                social.spotify
              }
              className="w-8 ml-2 hover:text-white"
                          >
              <FontAwesomeIcon icon={["fab", "spotify"]} size="2x" />
            </LinkButton> */}
          </div>
        </div>
      </div>
      <div className="px-6 flex sm:block w-full sm:w-1/2 py-4 justify-center">
        <p className="text-xs">2020 - Agustinus Nathaniel</p>
      </div>
    </div>
  )
}
