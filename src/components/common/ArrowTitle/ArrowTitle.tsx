import * as styles from '@/components/common/ArrowTitle/ArrowTitle.module.scss'

type Props = {
  children: string
}

export const ArrowTitle: React.FC<Props> = ({ children }) => {
  return (
    <h2 className={styles['title']}>
      <span className={styles['text']}>{children}</span>
      <span className={styles['arrow']} />
    </h2>
  )
}
