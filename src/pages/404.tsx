import { navigate } from 'gatsby'
import * as React from 'react'

import type { PageProps } from 'gatsby'

const NotFoundPage: React.FC<PageProps> = () => {
  React.useEffect(() => {
    navigate('/')
  }, [])

  return <></>
}

export default NotFoundPage
