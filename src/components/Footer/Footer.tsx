import * as React from 'react'

import * as styles from '@/components/Footer/Footer.module.scss'
import iconPath from '@/images/logo/icon.svg'

export const Footer: React.FC = () => {
  return (
    <footer className={styles['footer']}>
      <ul className={styles['list']}>
        <li>ブログ</li>
        <li>
          活動紹介
          <ul>
            <li>鯖江市地域活性化プランコンテスト</li>
            <li>サンプルテキスト</li>
            <li>サンプルテキスト</li>
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
