import * as styles from '@/components/common/IconTitle/IconTitle.module.scss'
import iconPath from '@/images/logo/icon.svg'

type Props = {
  children: string
}

export const IconTitle: React.FC<Props> = ({ children }) => {
  return (
    <>
      <img
        className={styles['icon']}
        src={iconPath}
        alt="学生団体withロゴマーク"
      />
      <h2 className={styles['title']}>{children}</h2>
    </>
  )
}
