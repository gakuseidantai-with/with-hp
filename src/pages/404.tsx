import { navigate } from 'gatsby'
import { useEffect } from 'react'

import type { HeadFC, PageProps } from 'gatsby'

import { SEO } from '@/components'

const NotFoundPage: React.FC<PageProps> = () => {
  useEffect(() => {
    navigate('/')
  }, [])

  return <></>
}

export default NotFoundPage

export const Head: HeadFC = () => <SEO />
