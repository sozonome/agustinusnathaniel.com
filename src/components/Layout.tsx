import React, { Component } from 'react'
import SEO from './SEO';
import Head from './Head';
import Foot from './Foot';
import 'typeface-muli';
import 'typeface-open-sans';

export type layoutProps = {
  className?: string,
  hasBackground?: boolean,
}

export default class Layout extends Component<layoutProps> {
  render() {
    const { className, hasBackground } = this.props;
    return (
      <div className={className}>
        <SEO />
        <div className={"hero is-fullheight is-black " + (hasBackground ? "has-background" : null)}>
          { 
            hasBackground?
            <>
              <img className="hero-background" src="https://source.unsplash.com/user/agustinusnathaniel" alt=""/>
            </> 
            : null
          }
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
