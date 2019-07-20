import React, { Component } from 'react'
import { Container } from 'semantic-ui-react';
import SEO from './SEO';

export default class Layout extends Component<any> {
  render() {
    return (
      <Container className="Container">
        <SEO />
        {this.props.children}
      </Container>
    )
  }
}
