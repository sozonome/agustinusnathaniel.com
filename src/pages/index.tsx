import React, { Component } from 'react'
import { graphql, Link } from 'gatsby';
import { Container, Header, Image, Icon, Menu } from 'semantic-ui-react';

interface IndexPageProps {
  data: {
    site: {
      siteMetadata: {
        name: string;
        tagline: string;
      }
    }
  }
}

export const indexPageQuery = graphql`
  query IndexPageQuery{
    site{
      siteMetadata{
        name
        tagline
      }
    }
  }
`

export default class IndexPage extends Component<IndexPageProps, {}> {
  render() {
    const {
      name,
      tagline
    } = this.props.data.site.siteMetadata;

    return (
      <Container className="Container">
        <Header className="Header" as="h2">
          <Image circular src={require("../images/avatar.jpeg")} />
          <Header.Content>
            @nate_228
            <Header.Subheader>Personal Site</Header.Subheader>
          </Header.Content>
        </Header>
        <Link to="/blog">Blog</Link>

        <Container>
          <a href="https://www.instagram.com/nate_228">
            <Icon size="large" name='instagram' />
          </a>
        </Container>

      </Container>
    )
  }
}