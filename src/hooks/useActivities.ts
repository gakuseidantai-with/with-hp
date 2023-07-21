import { graphql, useStaticQuery } from 'gatsby'

export const useActivities = () => {
  const { allMicrocmsActivities } = useStaticQuery<Queries.GetActivitiesQuery>(
    graphql`
      query GetActivities {
        allMicrocmsActivities(sort: { sortIndex: ASC }) {
          nodes {
            ...Activity
          }
        }
      }
      fragment Activity on MicrocmsActivities {
        id
        title
        description
        link
        images {
          imgixImage {
            url
            gatsbyImageData(placeholder: BLURRED)
          }
        }
      }
    `
  )
  return allMicrocmsActivities.nodes
}
