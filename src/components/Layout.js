import React, { Component } from "react"
import SEO from "./SEO"
import "typeface-muli"
import "typeface-open-sans"
import Head from "./Head"
import Foot from "./Foot"

export default class Layout extends Component {
  render() {
    return (
      <div className="flex flex-wrap mainwrapper bg-black text-gray-400 mx-auto">
        <SEO />
        <Head />
        <div id="site-content" className="my-8 px-6 w-full">
          <div className="fadeTrans">{this.props.children}</div>
        </div>
        <Foot />
      </div>
    )
  }
}
