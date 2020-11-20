import React from "react";

import "typeface-open-sans";
import "fontsource-recursive";

import SEO from "./SEO";
import Head from "./Head";
import Foot from "./Foot";

type LayoutProps = {
  children: any;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex flex-wrap mainwrapper bg-black text-gray-400 mx-auto">
      <SEO />
      <Head />
      <div id="site-content" className="my-8 px-6 w-full">
        <div className="fadeTrans">{children}</div>
      </div>
      <Foot />
    </div>
  );
};

export default Layout;
