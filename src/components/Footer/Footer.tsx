import { AnchorLink } from 'gatsby-plugin-anchor-links'

import * as styles from '@/components/Footer/Footer.module.scss'
import { useActivities, useSiteMetadata } from '@/hooks'
import iconPath from '@/images/logo/icon.svg'

export const Footer: React.FC = () => {
  const siteMetadata = useSiteMetadata()
  const activities = useActivities()

  return (
    <footer className={styles['footer']}>
      <ul className={styles['list']}>
        <li>
          <AnchorLink to="/#about">学生団体withとは</AnchorLink>
        </li>
        <li>
          <AnchorLink to="/#blog">ブログ</AnchorLink>
        </li>
        <li>
          <AnchorLink to="/#activity">活動紹介</AnchorLink>
          <ul>
            {activities.map((activity) => {
              return (
                <li key={activity.id}>
                  <a
                    href={activity.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="material-symbols-outlined">
                      open_in_new
                    </span>
                    {activity.title}
                  </a>
                </li>
              )
            })}
          </ul>
        </li>
        {siteMetadata && (
          <li>
            <a href={`mailto:${siteMetadata.mail}`}>
              <span className="material-symbols-outlined">mail</span>
              お問い合わせ
            </a>
          </li>
        )}
      </ul>
      <div className={styles['copyright']}>
        <AnchorLink to="/#top">
          <img
            className={styles['icon']}
            src={iconPath}
            alt="学生団体withアイコン"
          />
        </AnchorLink>
        <p>©︎ with All rights reserved.</p>
      </div>
    </footer>
  )
}
