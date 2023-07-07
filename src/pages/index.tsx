import * as React from 'react'

import type { HeadFC, PageProps } from 'gatsby'

import { Activities, Blogs, Footer, Header, Main, SEO, Top } from '@/components'

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
      <Footer />
    </>
  )
}

export default IndexPage

export const Head: HeadFC = () => <SEO />
