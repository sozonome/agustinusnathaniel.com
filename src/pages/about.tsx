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
        <p className="text-xs text-gray-600">Last update : 08 April 2020. <br/> (in progress doing thesis for graduation)</p>
        <section id="intro" className="mt-4">
          <p className="mb-4 text-md">
            I'm Agustinus Nathaniel, currently an IT (Computer Science / Informatics) Student from Indonesia.
            {/* I aim to be a Front End Developer after graduate in several more months. */}
            I love to explore and learn stuffs around technology and design.
          </p>
          <h2 className="text-2xl font-semibold mb-2">How do I got into tech?</h2>
          <div className="mb-4 text-sm">
            I was fascinated by computer technology since I was so small. Then, internet is becoming more accessible. 
            I started to know Google, Yahoo!, blogger, facebook, twitter, etc. I became interested in web technologies and applications.
            But I took it for granted, I just thought my interest towards computer and web technologies is just the same as my other friends, so I didn't feel special at all having that interest.
            I started to have so many interests towards various things.
            Even when I was looking for college at my final year of high school, IT is not my first option. Long story short, after applying myself to some college with non-IT major and scholarship programs, I finally took IT major.
            The first 2 year of college is full of stuggling because I just realized there are so many courses and I only like almost 20% of them. 
            The only subjects I really like is only about web and mobile development.
          </div>
          {/* <h2 className="text-2xl font-semibold mb-2">Beside being an IT Student...</h2>
          <div className="mb-4 text-sm">
            I also do freelance website development, photography and videography services.
            I share my personal shoots (mainly travel content) on my <a href={'https://www.instagram.com/' + site.siteMetadata.social.instagram} className="w-8 text-orange-600 hover:text-blue-400 underline hover:font-bold">Instagram</a>.
            <div className="mt-2 text-xs">N.B. Yeah I'm so used to people assumed myself as a film / photography student 😂.</div>
          </div> */}
        </section>
        <section id="content-foot">
        </section>
      </div>
    </Layout>
  )
}
