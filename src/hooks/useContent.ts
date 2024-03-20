import { graphql, useStaticQuery } from 'gatsby'

export const useContent = () => {
  const { microcmsContent } = useStaticQuery<Queries.GetContentQuery>(
    graphql`
      query GetContent {
        microcmsContent {
          title
          description
          topImages {
            imgixImage {
              url
              gatsbyImageData(placeholder: BLURRED)
            }
          }
          decorativeImgixImage1 {
            gatsbyImageData(placeholder: BLURRED)
          }
          decorativeImgixImage2 {
            gatsbyImageData(placeholder: BLURRED)
          }
          decorativeImgixImage3 {
            gatsbyImageData(placeholder: BLURRED)
          }
          decorativeImgixImage4 {
            gatsbyImageData(placeholder: BLURRED)
          }
          decorativeImgixImage5 {
            gatsbyImageData(placeholder: BLURRED)
          }
          decorativeImgixImage6 {
            gatsbyImageData(placeholder: BLURRED)
          }
        }
      }
    `
  )

  return microcmsContent
}
