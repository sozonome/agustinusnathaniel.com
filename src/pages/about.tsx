import React from "react";

import Layout from "../components/Layout";

import profileImg from "../images/profile.jpg";
import LinkButton from "../components/LinkButton";
import { useSiteMetadata } from "../queries/siteQuery";

const About = () => {
  const { social } = useSiteMetadata();

  return (
    <Layout>
      <div>
        <h1 className="text-3xl font-bold">About me</h1>
        <section id="intro" className="mt-4">
          <p className="mb-4 text-md">
            Hi! I'm{" "}
            <LinkButton
              href={"https://www.instagram.com/" + social.instagram}
              className="w-8 text-orange-600 hover:text-blue-400 underline hover:font-bold"
            >
              Agustinus Nathaniel
            </LinkButton>
            , also known as{" "}
            <LinkButton
              href={"https://www.instagram.com/" + social.devInstagram}
              className="w-8 text-orange-600 hover:text-blue-400 underline hover:font-bold"
            >
              @sozonome.
            </LinkButton>
            <br />I love to explore and learn stuffs around technology and
            design. I believe experiences + mistakes are the greatest teacher
            and learning is a lifetime process.
          </p>
          <img
            className="w-1/2 rounded-lg mb-4"
            src={profileImg}
            alt="Agustinus Nathaniel"
          />
          <div>
            <h2 className="text-2xl font-bold mt-12 text-teal-400">Lists</h2>
            <h4 className="text-1xl font-semibold mb-2">
              Some lists or recommendations of stuffs I like and/or use.
            </h4>
            <div className="mb-4 text-md">
              <LinkButton
                href="https://sozonome.github.io/bookmarks"
                className="text-teal-500 hover:text-teal-200 font-semibold hover:underline"
              >
                Bookmarks
              </LinkButton>
            </div>
          </div>
        </section>
        <section id="content-foot"></section>
      </div>
    </Layout>
  );
};

export default About;
