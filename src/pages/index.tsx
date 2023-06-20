import * as React from 'react'

import type { HeadFC, PageProps } from 'gatsby'

import { Activities, Blogs, Header, SEO, Top, Main } from '@/components'

const IndexPage: React.FC<PageProps> = () => {
  return (
    <>
      <Header />
      <main>
        <Top />
        <Main />
        <Blogs />
        <Activities />
      </main>
    </>
  )
}

export default IndexPage

export const Head: HeadFC = () => <SEO />
