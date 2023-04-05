import type { CreateSchemaCustomizationArgs } from 'gatsby'

exports.createSchemaCustomization = ({
  actions,
}: CreateSchemaCustomizationArgs) => {
  const { createTypes } = actions
  const typeDefs = `
    type MicrocmsTopImages implements Node @dontInfer {
      sortIndex: Int!
      id: ID!
      alt: String!
      imgixImage: ImgixImage!
    }
  `
  createTypes(typeDefs)
}
