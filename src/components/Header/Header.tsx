import { AnchorLink } from 'gatsby-plugin-anchor-links'
import * as React from 'react'

import * as styles from '@/components/Header/Header.module.scss'
import { useSiteMetadata } from '@/hooks'
import logoPath from '@/images/logo/logo.svg'
import taglinePath from '@/images/logo/tagline.svg'
import { isClient } from '@/utils/helper'

export const Header: React.FC = () => {
  const siteMetadata = useSiteMetadata()

  const [prevScrollPos, setPrevScrollPos] = React.useState<number>(
    isClient() ? window.scrollY : 0
  )
  const [hidden, setHidden] = React.useState<boolean>(false)
  const ticking = React.useRef<boolean>(false)

  const handleScroll = React.useCallback(() => {
    const currentScrollPos = window.scrollY

    if (!prevScrollPos) {
      setPrevScrollPos(currentScrollPos)
      return
    }

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
      <AnchorLink className={styles['glyph']} to="/#top">
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
      </AnchorLink>
      <nav className={styles['links']}>
        <AnchorLink to="/#about">学生団体withとは</AnchorLink>
        <AnchorLink to="/#blog">ブログ</AnchorLink>
        {siteMetadata && (
          <a href={`mailto:${siteMetadata.mail}`}>お問い合わせ</a>
        )}
      </nav>
    </header>
  )
}
