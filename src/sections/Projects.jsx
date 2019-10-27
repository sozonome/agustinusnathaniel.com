import React from 'react'
import ProjectCard from '../components/ProjectCard'
import gatsby from '../images/Gatsby-Monogram.svg';
import netlify from '../images/logomark.svg';
import { Link } from 'gatsby';

export default function Projects() {
  return (
    <div className="section" id="projects">
      <h1 className="title is-1" >Projects</h1>
      <h5 className="subtitle is-5">Some previous projects I worked on</h5>
      
      <div className="section">
        <ProjectCard
          title="Personal Website"
          subtitle="agustinusnathaniel.com"
          description={<>This very website you are currently watching.<br/>A portfolio site build with Gatsby</>}
          footer={[
            {
              link: 'https://gatsbyjs.org',
              linkTitle: 'Built with Gatsby',
              image: gatsby
            },
            {
              link: 'https://netlify.com',
              linkTitle: 'Hosted using Netlify',
              image: netlify
            },
          ]}
        />
      </div>

      <div className="section">
        <ProjectCard
          title="GA Australia Services"
          subtitle="gaaustraliaservices.com"
          subtitleLink="https://gaaustraliaservices.com"
          description={"A business page for GA Australia Services"}
        />
      </div>

      <div className="has-text-centered">
        <Link className="button" to="/projects">More ⏭️</Link>
      </div>
    </div>
  )
}
