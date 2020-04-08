import React, { Component } from 'react'
import SEO from './SEO';
import "../styles/global.scss";
import 'typeface-muli';
import 'typeface-open-sans';
import Helmet from 'react-helmet';
import Head from './Head';
import Foot from './Foot';

export default class Layout extends Component {
  render() {
    return (
      <div className="flex flex-wrap mainwrapper mx-auto h-screen">
        <SEO />
        <Helmet>
          <body className="bg-black text-white"/>
        </Helmet>
        <Head/>
        <div className="my-8 px-6 w-full">
          {this.props.children}
        </div>
        <Foot/>
      </div>
    )
  }
}
