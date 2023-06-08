import * as React from 'react'

import type { HeadFC, PageProps } from 'gatsby'

import { Header, SEO, Top } from '@/components'

const IndexPage: React.FC<PageProps> = () => {
  return (
    <>
      <Header />
      <main>
        <Top />
      </main>
    </>
  )
}

export default IndexPage

export const Head: HeadFC = () => <SEO />
