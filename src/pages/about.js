import React from 'react';
import Layout from '../components/Layout';
import { Link } from '@reach/router';
import { useStaticQuery, graphql} from 'gatsby';

export default function About() {
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
    <Layout>
      <div>
        <h1 className="text-3xl font-bold">About me</h1>
        <p className="text-xs text-gray-600">Last update : 08 April 2020. <br/> (in progress doing thesis ✌️)</p>
        <section id="intro" className="mt-4">
          <p className="mb-4 text-md">
            I'm Agustinus Nathaniel, currently an IT (Computer Science / Informatics) Student from Indonesia. 
            {/* I aim to be a Front End Developer after graduate in several more months. */}
            <br/>
            I love to explore and learn stuffs around technology and design.
          </p>
          <h2 className="text-2xl font-semibold mb-2">How do I got into Tech?</h2>
          <div className="mb-4 text-sm">
            I was fascinated by computer technology since I was little. Then, internet is becoming more accessible. 
            I started to know Google, Yahoo!, blogger, facebook, twitter, etc. I became interested in web technologies and applications.
            But I took it for granted, I just thought my interest towards computer and web technologies is just the same as my other friends, so I didn't feel special at all having that interest.
            I started to have so many interests towards various things.
            Even when I was looking for college at my final year of high school, IT is not my first option. Long story short, after applying myself to some college with non-IT major and scholarship programs (which I also failed to get), I finally took IT major.
            The first 2 year of college is full of stuggling because there are so many courses and I like almost 20% of them only. 
            The only subjects I really like is subjects around web and mobile development.
            Hoping to graduate soon in several more months.
          </div>
          <h2 className="text-2xl font-semibold mb-2">Beside Tech...</h2>
          <div className="mb-4 text-sm">
            I also do photography and videography.
            <br/>
            {/* <div className="mb-2">
              (Check out my works <a href="https://www.instagram.com/cherocaptures" className="text-blue-300 font-semibold underline hover:text-blue-200" target="_blank">here</a>.)
            </div> */}
            I share my personal shoots (mainly travel content) on my <a href={'https://www.instagram.com/' + site.siteMetadata.social.instagram} target="_blank" rel="noopener noreferrer" className="w-8 text-orange-600 hover:text-blue-400 underline hover:font-bold">Instagram</a>.
            <div className="mt-2 text-xs">N.B. Yeah I'm so used to people assumed myself as a film / photography student <span role="img" aria-label="laugh">😂</span>.</div>
          </div>
          <h2 className="text-2xl font-bold mt-12 text-teal-400">Lists</h2>
          <h4 className="text-1xl font-semibold mb-2">Some lists or recommendations of stuffs I like and/or use.</h4>
          <div className="mb-4 text-md">
            <ul>
              <li className="mb-2">
                <Link to="/dailyuse" className="text-teal-500 hover:text-teal-200 font-semibold hover:underline">What I use daily</Link>
              </li>
              <li className="mb-2">
                <Link to="/sitestack" className="text-teal-500 hover:text-teal-200 font-semibold hover:underline">This site stacks</Link>
              </li>
              <li>
                <a href="https://github.com/sozonome/great-apps-sites" className="text-teal-500 hover:text-teal-200 font-semibold hover:underline" target="_blank" rel="noopener noreferrer">Fun Apps / Sites</a>
              </li>
            </ul>
          </div>
        </section>
        <section id="content-foot">
        </section>
      </div>
    </Layout>
  )
}
