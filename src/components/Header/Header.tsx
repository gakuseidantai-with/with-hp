import * as React from 'react'

import * as styles from '@/components/Header/Header.module.scss'
import logoPath from '@/images/logo/logo.svg'
import taglinePath from '@/images/logo/tagline.svg'
import { isClient } from '@/utils/helper'

export const Header: React.FC = () => {
  const [prevScrollPos, setPrevScrollPos] = React.useState<number>(
    isClient() ? window.pageYOffset : 0
  )
  const [hidden, setHidden] = React.useState<boolean>(false)
  const ticking = React.useRef<boolean>(false)

  const handleScroll = React.useCallback(() => {
    const currentScrollPos = window.pageYOffset

    if (!ticking.current) {
      window.requestAnimationFrame(() => {
        setHidden(
          currentScrollPos > window.innerHeight / 1.5
            ? prevScrollPos < currentScrollPos
            : false
        )
        setPrevScrollPos(currentScrollPos)

        ticking.current = false
      })

      ticking.current = true
    }
  }, [prevScrollPos])

  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [handleScroll])

  return (
    <header className={`${styles['header']} ${hidden ? styles['hidden'] : ''}`}>
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
