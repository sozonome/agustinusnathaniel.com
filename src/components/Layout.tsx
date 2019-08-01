import React, { Component } from 'react'
import SEO from './SEO';

export default class Layout extends Component<any> {
  render() {
    const {className} = this.props;
    return (
      <div className={className}>
        <SEO />
        {this.props.children}
      </div>
    )
  }
}
