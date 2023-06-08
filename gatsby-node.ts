import type { CreateSchemaCustomizationArgs } from 'gatsby'

exports.createSchemaCustomization = ({
  actions,
}: CreateSchemaCustomizationArgs) => {
  const { createTypes } = actions
  const typeDefs = `
    type SiteSiteMetadata {
      title: String!
      description: String!
      siteUrl: String!
      image: String!
      twitterUsername: String!
      themeColor: String!
    }

    type MicrocmsTopImages implements Node @dontInfer {
      sortIndex: Int!
      id: ID!
      alt: String!
      imgixImage: ImgixImage!
    }
  `
  createTypes(typeDefs)
}
