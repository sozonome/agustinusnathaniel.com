import React, { Component } from 'react'
import { Header, Image } from 'semantic-ui-react';
import { Link } from 'gatsby';

export default class Head extends Component {
  render() {
    return (
      <Link to="/">
        <Header className="Header" as="h1">
          <Image circular src={require("../images/coconate.png")} />
          <Header.Content>
            agustinus nathaniel
          </Header.Content>
        </Header>
      </Link>
    )
  }
}
