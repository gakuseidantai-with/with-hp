import { graphql, useStaticQuery } from 'gatsby'

export const useTopImages = () => {
  const { allMicrocmsTopImages } = useStaticQuery<Queries.GetTopImagesQuery>(
    graphql`
      query GetTopImages {
        allMicrocmsTopImages(sort: { sortIndex: ASC }) {
          nodes {
            id
            alt
            imgixImage {
              gatsbyImageData(placeholder: BLURRED)
            }
          }
        }
      }
    `
  )

  return allMicrocmsTopImages.nodes
}
