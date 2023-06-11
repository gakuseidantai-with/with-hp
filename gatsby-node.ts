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

    type MicrocmsActivities implements Node @dontInfer {
      title: String!
      description: String!
      activitiesId: String!
      sortIndex: Int!
      images: [MicrocmsActivitiesImages!]!
    }

    type MicrocmsActivitiesImages implements Node @dotInfer {
      imgixImage: ImgixImage!
    }

  `
  createTypes(typeDefs)
}
