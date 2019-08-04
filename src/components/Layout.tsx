import React, { Component } from 'react'
import SEO from './SEO';
import Head from './Head';

export default class Layout extends Component<any> {
  render() {
    const { className } = this.props;
    return (
      <div className={className}>
        <SEO />
        <div className="hero is-fullheight">
          <div className="hero-head">
            <Head/>
          </div>

          <main>
            {this.props.children}
          </main>
        </div>
      </div>
    )
  }
}
