import * as React from 'react'

import * as styles from '@/components/Header/Header.module.scss'
import logoPath from '@/images/logo/logo.svg'
import taglinePath from '@/images/logo/tagline.svg'

export const Header: React.FC = () => {
  return (
    <header className={styles['header']}>
      <a className={styles['glyph']} href="/">
        <img
          className={styles['logo']}
          src={logoPath}
          alt="学生団体withロゴマーク"
        />
        <img
          className={styles['tagline']}
          src={taglinePath}
          alt="学生団体withタグライン"
        />
      </a>
      <nav className={styles['links']}>
        <button>学生団体withとは</button>
        <button>ブログ</button>
        <button>メンバー紹介</button>
        <a href="/">お問い合わせ</a>
      </nav>
    </header>
  )
}
