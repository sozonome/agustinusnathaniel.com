import React, { Component } from 'react'
import SEO from './SEO';
import Head from './Head';
import Foot from './Foot';
import "bulma"
import "../styles/global.scss"
import 'typeface-muli';
import 'typeface-open-sans';
import Helmet from 'react-helmet';

export type layoutProps = {
  className?: string,
  hasBackground?: boolean,
}

export default class Layout extends Component<layoutProps> {
  render() {
    const { className } = this.props;
    return (
      <div className={`${className} `}>
        <SEO />
        <Helmet>
          <body className="has-navbar-fixed-top"/>
        </Helmet>
        <div className="">
          <div className="">
            <Head />
          </div>
          <div className="content">
            {this.props.children}
          </div>
          <div className="">
            <Foot />
          </div>
        </div>
      </div>
    )
  }
}
