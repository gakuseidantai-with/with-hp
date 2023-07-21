import * as React from 'react'

import * as styles from '@/components/Footer/Footer.module.scss'
import { useActivities } from '@/hooks'
import iconPath from '@/images/logo/icon.svg'

export const Footer: React.FC = () => {
  const activities = useActivities()

  return (
    <footer className={styles['footer']}>
      <ul className={styles['list']}>
        <li>ブログ</li>
        <li>
          活動紹介
          <ul>
            {activities.map((activity) => {
              return (
                <li key={activity.id}>
                  <a
                    href={activity.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {activity.title}
                  </a>
                </li>
              )
            })}
          </ul>
        </li>
        <li>メンバー紹介</li>
      </ul>
      <div className={styles['copyright']}>
        <img
          className={styles['icon']}
          src={iconPath}
          alt="学生団体withアイコン"
        />
        <p>©︎ with All rights reserved.</p>
      </div>
    </footer>
  )
}
