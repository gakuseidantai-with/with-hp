import { navigate } from 'gatsby'
import * as React from 'react'

import type { HeadFC, PageProps } from 'gatsby'

import { SEO } from '@/components'

const NotFoundPage: React.FC<PageProps> = () => {
  React.useEffect(() => {
    navigate('/')
  }, [])

  return <></>
}

export default NotFoundPage

export const Head: HeadFC = () => <SEO />
