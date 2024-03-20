import React from 'react'

import * as styles from '@/components/common/Glasses/Glasses.module.scss'

export const Glasses: React.FC = () => {
  return (
    <div className={styles['glasses']}>
      <div className={styles['circle']}></div>
      <div className={styles['line']}></div>
      <div className={styles['circle']}></div>
    </div>
  )
}
