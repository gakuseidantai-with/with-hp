import * as React from 'react'

import { useSiteMetadata } from '@/hooks'
import { assertIsDefined } from '@/utils/assert'

type Props = {
  children?: React.ReactNode
}

export const SEO: React.FC<Props> = ({ children }) => {
  const siteMetadata = useSiteMetadata()
  assertIsDefined(siteMetadata)
  const { title, description, themeColor } = siteMetadata

  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="theme-color" content={themeColor} />
      {children}
    </>
  )
}
