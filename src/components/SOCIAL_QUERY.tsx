import { useStaticQuery, graphql } from "gatsby";

export const {site} = useStaticQuery(graphql`
  query {
    site {
      siteMetadata {
        social{
          instagram
          youtube
          linkedin
          github
          medium
          email
          twitter
          behance
          dribbble
        }
      }
    }
  }
`);