import { graphql, useStaticQuery } from 'gatsby'

export const useSiteMetadata = () => {
  const { site } = useStaticQuery<Queries.GetSiteMetadataQuery>(
    graphql`
      query GetSiteMetadata {
        site {
          siteMetadata {
            title
            description
            siteUrl
            twitterUsername
            themeColor
          }
        }
      }
    `
  )

  return site?.siteMetadata
}
