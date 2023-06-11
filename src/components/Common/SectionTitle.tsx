import * as React from 'react'

import * as styles from '@/components/Common/SectionTitle.module.scss'
type Props = {
  title: String
}

export const SectionTitle: React.FC<Props> = ({ title }) => {
  return <h2 className={styles['sectionTitle']}>{title}</h2>
}
