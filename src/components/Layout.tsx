import React, { Component } from 'react'
import SEO from './SEO';

export default class Layout extends Component<any> {
  render() {
    return (
      <div>
        <SEO />
        {this.props.children}
      </div>
    )
  }
}
