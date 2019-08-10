import React, { Component } from 'react'
import SEO from './SEO';
import Head from './Head';
import Foot from './Foot';

export default class Layout extends Component<any> {
  render() {
    const { className } = this.props;
    return (
      <div className={className}>
        <SEO />
        <div className="hero is-fullheight is-black">
          <div className="hero-head">
            <Head />
          </div>
          <div className="hero-body">
            {this.props.children}
          </div>
          <div className="hero-foot">
            <Foot />
          </div>
        </div>
      </div>
    )
  }
}
