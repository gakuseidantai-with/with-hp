import * as React from 'react'

import type { HeadFC, PageProps } from 'gatsby'

import { Top } from '@/components'

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main>
      <h1>Hello World!</h1>
      <Top />
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
