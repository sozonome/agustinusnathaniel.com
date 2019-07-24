import React, { Component } from 'react'
import { Container, Image } from 'semantic-ui-react';

export default class About extends Component {
  render() {
    return (
      <Container>
        <Image rounded src={require("../images/avatar.jpeg")} floated="left" />
        <h1>Tech and Art lover</h1>
        <p>
          Have you ever wondered how something is built? What's the story behind of a movie?<br/>
          How does a product can be known and bought by customers without even interacting directly?<br/>
          Well, I'm that kinda of person. I love to know what's behind every creations. The stories, methods, and people behind it.<br/>
          I love to learn, create, and connect with people.
        </p>
        <br/><br/>
        <hr/>
      </Container>
    )
  }
}
