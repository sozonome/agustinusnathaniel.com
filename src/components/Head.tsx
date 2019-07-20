import React, { Component } from 'react'
import {Header, Image} from 'semantic-ui-react';

export default class Head extends Component {
  render() {
    return (
      <Header className="Header" as="h1">
        <Image circular src={require("../images/coconate.png")} />
        <Header.Content>
          @nate_228
          <Header.Subheader>Personal Site</Header.Subheader>
        </Header.Content>
      </Header>
    )
  }
}
