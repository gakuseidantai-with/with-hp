import * as React from 'react'

import type { HeadFC, PageProps } from 'gatsby'

import { SEO, Top } from '@/components'

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main>
      <Top />
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <SEO />
