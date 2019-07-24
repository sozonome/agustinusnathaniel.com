import React from 'react'
import { Grid, Button, List, Icon, Container } from 'semantic-ui-react';
import { useStaticQuery, graphql } from 'gatsby';

export default function Social() {
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          social{
            instagram
            youtube
            linkedin
            github
            unsplash
            email
          }
        }
      }
    }
  `);
  return (
    <Grid centered columns={8}>
      <Button animated="fade">
        <a href={"mailto:" + site.siteMetadata.social.email}>
          <Button.Content visible>Mail Me! Let's Collaborate!</Button.Content>
          <Button.Content hidden>{site.siteMetadata.social.email}</Button.Content>
        </a>
      </Button>
      <Container className="socialButtons">
        <List horizontal>
          <List.Item content={
            <a href={'https://www.instagram.com/' + site.siteMetadata.social.instagram}>
              <Icon name="instagram" size="big" />
            </a>
          } />
          <List.Item content={
            <a href={'https://www.youtube.com/' + site.siteMetadata.social.youtube}>
              <Icon name="youtube" size="big" />
            </a>
          } />
          <List.Item content={
            <a href={'https://www.linkedin.com/in/' + site.siteMetadata.social.linkedin}>
              <Icon name="linkedin" size="big" />
            </a>
          } />
          <List.Item content={
            <a href={'https://www.github.com/' + site.siteMetadata.social.github}>
              <Icon name="github" size="big" />
            </a>
          } />
          <List.Item content={
            <a href={'https://www.unsplash.com/' + site.siteMetadata.social.unsplash}>
              <Icon name="photo" size="big" />
            </a>
          } />
        </List>
      </Container>
    </Grid>
  )
}
