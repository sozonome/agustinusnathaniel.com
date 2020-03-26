import React, { Component } from 'react'
import SEO from './SEO';
import Head from './Head';
import Foot from './Foot';
import "../styles/global.scss"
import 'typeface-muli';
import 'typeface-open-sans';
import Helmet from 'react-helmet';

export default class Layout extends Component {
  render() {
    return (
      <div className="main-bg">
        <SEO />
        <Helmet>
          <body 
            // className="has-navbar-fixed-top"
          />
        </Helmet>
        {/* <Head /> */}
        <div className="main-content">
          {this.props.children}
        </div>
        {/* <Foot /> */}
      </div>
    )
  }
}
