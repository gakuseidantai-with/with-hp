import { useStaticQuery, graphql } from 'gatsby'

const useTopImages = () => {
  const { allMicrocmsTopImages } = useStaticQuery<Queries.TopImagesQuery>(
    graphql`
      query TopImages {
        allMicrocmsTopImages(sort: { sortIndex: ASC }) {
          nodes {
            id
            alt
            imgixImage {
              gatsbyImageData
            }
          }
        }
      }
    `
  )

  return allMicrocmsTopImages.nodes
}

export default useTopImages
