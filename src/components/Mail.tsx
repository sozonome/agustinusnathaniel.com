import React, { Component } from 'react'
import { useStaticQuery, graphql } from 'gatsby';

export type MailProps = {
  btnClass?: string,
  mailText: string
}



const Mail = (props:MailProps) => {
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          social{
            email
          }
        }
      }
    }
  `);
  const {btnClass, mailText} = props;

    return (
      <a className={btnClass ? btnClass : ''} href={"mailto:" + site.siteMetadata.social.email + "?subject=Let's Work Together&cc=agustinusnathaniel228@gmail.com"}>
        {mailText}
      </a>
    )
}

export default Mail;