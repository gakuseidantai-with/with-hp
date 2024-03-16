import { JSDOM } from 'jsdom'

import type {
  CreateResolversArgs,
  CreateSchemaCustomizationArgs,
  CreateWebpackConfigArgs,
} from 'gatsby'

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
      mail: String!
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

// https://github.com/gatsbyjs/gatsby/discussions/30169
exports.onCreateWebpackConfig = ({
  stage,
  actions,
  getConfig,
  plugins,
}: CreateWebpackConfigArgs) => {
  const config = getConfig()
  const miniCssExtractPluginIndex = config.plugins.findIndex(
    (plugin: { constructor: { name: string } }) =>
      plugin.constructor.name === 'MiniCssExtractPlugin'
  )

  if (miniCssExtractPluginIndex > -1) {
    // remove miniCssExtractPlugin from plugins list
    config.plugins.splice(miniCssExtractPluginIndex, 1)

    // re-add mini-css-extract-plugin
    config.plugins.push(
      plugins.extractText({
        filename: `[name].${
          stage === 'build-javascript' ? '[contenthash].' : ''
        }css`,
        chunkFilename: `[id].${
          stage === 'build-javascript' ? '[contenthash].' : ''
        }css`,
        ignoreOrder: true,
      })
    )
  }
  actions.replaceWebpackConfig(config)
}
