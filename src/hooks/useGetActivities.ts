import { graphql, useStaticQuery } from 'gatsby'

export const useGetActivities = () => {
  const { allMicrocmsActivities } = useStaticQuery<Queries.GetActivitiesQuery>(
    graphql`
      query GetActivities {
        allMicrocmsActivities(sort: { sortIndex: ASC }) {
          nodes {
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
        }
      }
    `
  )
  return allMicrocmsActivities.nodes
}
