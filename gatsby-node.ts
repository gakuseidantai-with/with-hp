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

    type MicrocmsContent implements Node {
      title: String!
      description: String!
      decorativeImgixImage1: ImgixImage!
      decorativeImgixImage2: ImgixImage!
      decorativeImgixImage3: ImgixImage!
      decorativeImgixImage4: ImgixImage!
      decorativeImgixImage5: ImgixImage!
      decorativeImgixImage6: ImgixImage!
      topImages: [MicrocmsContentTopImages!]!
    }

    type MicrocmsContentTopImages implements Node {
      imgixImage: ImgixImage!
    }

    type MicrocmsActivities implements Node {
      title: String!
      description: String!
      link: String!
      images: [MicrocmsActivitiesImages!]!
    }

    type MicrocmsActivitiesImages implements Node {
      imgixImage: ImgixImage!
    }
  `
  createTypes(typeDefs)
}

exports.createResolvers = ({ createResolvers }: CreateResolversArgs) => {
  const resolvers = {
    FeedWithBlog: {
      description: {
        type: 'String!',
        resolve(source: any) {
          return source.content
            .replace(/<\/?[^>]+(>|$)|&(#[0-9]+|[a-zA-Z]+);/g, '')
            .trim()
            .slice(0, 60)
        },
      },
      thumbnailUrl: {
        type: 'String!',
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
