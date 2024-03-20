import { useEffect, useLayoutEffect } from 'react'

import { isClient } from '@/utils/helper'

export const useIsomorphicLayoutEffect = isClient()
  ? useLayoutEffect
  : useEffect
