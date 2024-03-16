import * as React from 'react'

import { useSiteMetadata } from '@/hooks'
import { assertIsDefined } from '@/utils/assert'

type Props = {
  children?: React.ReactNode
}

export const SEO: React.FC<Props> = ({ children }) => {
  const siteMetadata = useSiteMetadata()
  assertIsDefined(siteMetadata)
  const { title, description, siteUrl, image, twitterUsername, themeColor } =
    siteMetadata

  return (
    <>
      <html lang="ja" />
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="image" content={`${siteUrl}${image}`} />

      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={siteUrl} />
      <meta property="og:image" content={`${siteUrl}${image}`} />

      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content={twitterUsername} />
      <meta name="twitter:creator" content={twitterUsername} />

      <meta name="theme-color" content={themeColor} />
      <meta name="msapplication-config" content="/browserconfig.xml" />
      <meta name="msapplication-TileColor" content={themeColor} />
      <link rel="manifest" href="/site.webmanifest" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/favicons/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicons/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicons/favicon-16x16.png"
      />
      <link
        rel="mask-icon"
        href="/favicons/safari-pinned-tab.svg"
        color={themeColor}
      />
      {children}
    </>
  )
}
