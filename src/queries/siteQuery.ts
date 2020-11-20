import { graphql, useStaticQuery } from "gatsby";

export const useSiteMetadata = () => {
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          author
          siteUrl
          social {
            instagram
            youtube
            github
            twitter
            linkedin
            medium
            email
            behance
            spotify
            devInstagram
          }
        }
      }
    }
  `);

  return site.siteMetadata;
};
