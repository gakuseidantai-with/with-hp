import { graphql, useStaticQuery } from 'gatsby'

export const useActivities = () => {
  const { allMicrocmsActivities } = useStaticQuery<Queries.GetActivitiesQuery>(
    graphql`
      query GetActivities {
        allMicrocmsActivities(sort: { sortIndex: ASC }) {
          nodes {
            ...MicrocmsActivities
          }
        }
      }

      fragment MicrocmsActivities on MicrocmsActivities {
        title
        description
        activitiesId
        images {
          imgixImage {
            gatsbyImageData(placeholder: BLURRED)
            url
          }
        }
      }
    `
  )
  return allMicrocmsActivities.nodes
}
