import * as path from 'path'

import * as dotenv from 'dotenv'

import type { GatsbyConfig } from 'gatsby'

dotenv.config({
  path: `.env.${process.env['NODE_ENV']}`,
})

const config: GatsbyConfig = {
  siteMetadata: {
    title: `学生団体with`,
    description: `鯖江から世界へ！福井県鯖江市で地域活性の活動を行う学生団体です！`,
    siteUrl: `https://with-sabae.com`,
    image: `/og.png`,
    twitterUsername: `@sabaepc_with`,
    themeColor: `#E4007F`,
  },
  graphqlTypegen: true,
  plugins: [
    {
      resolve: `gatsby-plugin-root-import`,
      options: {
        '@': path.join(__dirname, 'src'),
      },
    },
    'gatsby-plugin-image',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    `gatsby-plugin-sass`,
    `gatsby-plugin-smoothscroll`,
    {
      resolve: `gatsby-source-microcms`,
      options: {
        apiKey: process.env['MICROCMS_API_KEY'],
        serviceId: 'with-sabae',
        apis: [
          {
            endpoint: 'top-images',
            format: 'list',
          },
        ],
      },
    },
    {
      resolve: `@imgix/gatsby`,
      options: {
        defaultImgixParams: { auto: ['compress', 'format'] },
        fields: [
          {
            nodeType: 'MicrocmsTopImages',
            fieldName: 'imgixImage',
            rawURLKey: 'image.url',
          },
        ],
      },
    },
  ],
}

export default config
