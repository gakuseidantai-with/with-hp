import { JSDOM } from 'jsdom'

import type { CreateResolversArgs, CreateSchemaCustomizationArgs } from 'gatsby'

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

exports.createResolvers = ({ createResolvers }: CreateResolversArgs) => {
  const resolvers = {
    FeedWithBlog: {
      description: {
        type: 'String',
        resolve(source: any) {
          return source.content
            .replace(/<\/?[^>]+(>|$)|&(#[0-9]+|[a-zA-Z]+);/g, '')
            .trim()
            .slice(0, 60)
        },
      },
      thumbnailUrl: {
        type: 'String',
        async resolve(source: any) {
          try {
            const dom = await JSDOM.fromURL(source.link)
            const element = dom.window.document.querySelector(
              'meta[property="og:image"]'
            )
            if (!(element instanceof dom.window.HTMLMetaElement)) throw Error()
            return element.content
          } catch {
            return 'https://with-sabae.com/og.png'
          }
        },
      },
    },
  }
  createResolvers(resolvers)
}
