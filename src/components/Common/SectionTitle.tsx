import * as React from 'react'

import * as styles from '@/components/Common/SectionTitle.module.scss'
import iconPath from '@/images/logo/icon.svg'
type Props = {
  title: String
}

export const SectionTitle: React.FC<Props> = ({ title }) => {
  return (
    <>
      <img
        className={styles['icon']}
        src={iconPath}
        alt="学生団体withロゴマーク"
      />
      <h2 className={styles['sectionTitle']}>{title}</h2>
    </>
  )
}
