import React, { Component } from 'react'
import { Container, Image } from 'semantic-ui-react';

export default class About extends Component {
  render() {
    return (
      <Container>
        <Image rounded src={require("../images/avatar.jpeg")} />
      </Container>
    )
  }
}
