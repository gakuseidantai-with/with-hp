import * as path from 'path'

import * as dotenv from 'dotenv'

import type { GatsbyConfig } from 'gatsby'

dotenv.config({
  path: `.env.${process.env['NODE_ENV']}`,
})

const config: GatsbyConfig = {
  siteMetadata: {
    title: '学生団体with',
    description:
      '鯖江から世界へ！福井県鯖江市で地域活性の活動を行う学生団体です！',
    siteUrl: 'https://with-sabae.com',
    image: '/og.png',
    mail: 'gakuseidantai.with@gmail.com',
    twitterUsername: '@sabaepc_with',
    themeColor: '#E4007F',
  },
  jsxRuntime: 'automatic',
  graphqlTypegen: true,
  plugins: [
    {
      resolve: 'gatsby-plugin-root-import',
      options: {
        '@': path.join(__dirname, 'src'),
      },
    },
    {
      resolve: 'gatsby-omni-font-loader',
      options: {
        enableListener: true,
        preconnect: [
          'https://fonts.googleapis.com',
          'https://fonts.gstatic.com',
        ],
        web: [
          {
            name: 'Material Symbols Outlined',
            file: 'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200',
          },
          {
            name: 'Noto Sans JP',
            file: 'https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@100..900&display=swap',
          },
        ],
      },
    },
    'gatsby-plugin-image',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-plugin-anchor-links',
      options: {
        duration: 500,
      },
    },
    {
      resolve: 'gatsby-source-microcms',
      options: {
        apiKey: process.env['MICROCMS_API_KEY'],
        serviceId: 'with-sabae',
        apis: [
          {
            endpoint: 'content',
            format: 'object',
          },
          {
            endpoint: 'activities',
            format: 'list',
          },
        ],
      },
    },
    {
      resolve: 'gatsby-source-rss-feed',
      options: {
        url: 'http://rssblog.ameba.jp/gakuren/rss20.xml',
        name: 'WithBlog',
      },
    },
    {
      resolve: '@imgix/gatsby',
      options: {
        defaultImgixParams: { auto: ['compress', 'format'] },
        fields: [
          {
            nodeType: 'MicrocmsContentTopImage',
            fieldName: 'imgixImage',
            rawURLKey: 'url',
          },
          {
            nodeType: 'MicrocmsActivitiesImage',
            fieldName: 'imgixImage',
            rawURLKey: 'url',
          },
        ].concat(
          [...Array(6)].map((_, i) => {
            return {
              nodeType: 'MicrocmsContent',
              fieldName: `decorativeImgixImage${i + 1}`,
              rawURLKey: `decorativeImage${i + 1}.url`,
            }
          })
        ),
      },
    },
  ],
}

export default config
