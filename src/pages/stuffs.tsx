import React from "react";

import Layout from "../components/Layout";

import LinkButton from "../components/LinkButton";
import SznmIcon from "../images/avataaars.svg";
import CheroCapturesIcon from "../images/cherocaptures-icon.jpg";

const Stuffs = () => {
  return (
    <Layout>
      <h1 className="text-3xl font-bold">Some Stuffs I'm Working On</h1>
      <section className="my-4">
        <div>
          <LinkButton href="https://sznm.dev">
            <div className="bg-gray-800 hover:bg-gray-700 p-4 rounded-lg mb-4">
              <div className="flex items-center">
                <img src={SznmIcon} className="w-12 mr-4" alt="sozonome" />
                <div>
                  <h2 className="text-2xl font-bold">sozonome</h2>
                  <p className="text-sm">
                    My personal dev site and projects showcase.
                  </p>
                </div>
              </div>
            </div>
          </LinkButton>
          <LinkButton href="https://cherocaptures.com">
            <div className="bg-gray-800 hover:bg-gray-700 p-4 rounded-lg mb-4">
              <div className="flex items-center">
                <img
                  src={CheroCapturesIcon}
                  className="w-12 mr-4 rounded-full"
                  alt="sozonome"
                />
                <div>
                  <h2 className="text-2xl font-bold">CheroCaptures</h2>
                  <p className="text-sm">
                    Photography and Videography services for family / couple
                    sessions / events.
                  </p>
                </div>
              </div>
            </div>
          </LinkButton>
        </div>
      </section>
    </Layout>
  );
};

export default Stuffs;
