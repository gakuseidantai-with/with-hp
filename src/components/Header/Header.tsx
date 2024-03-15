import { AnchorLink } from 'gatsby-plugin-anchor-links'
import * as React from 'react'

import * as styles from '@/components/Header/Header.module.scss'
import { useSiteMetadata } from '@/hooks'
import logoPath from '@/images/logo/logo.svg'
import taglinePath from '@/images/logo/tagline.svg'
import { isClient } from '@/utils/helper'

export const Header: React.FC = () => {
  const [openMenu, setOpenMenu] = React.useState<boolean>(false)
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
    <>
      <header
        className={`${styles['header']} ${hidden ? styles['hidden'] : ''}`}
      >
        <div className={styles['Shamburger']}></div>
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
        <div
          className={styles['hamburger']}
          onClick={() => {
            setOpenMenu((v) => !v)
            console.log(openMenu)
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </header>
      <div
        className={`${styles['drawerMenu']} ${openMenu ? styles['open'] : ''}`}
      >
        <ul className={styles['list']}>
          <div
            className={styles['close']}
            onClick={() => setOpenMenu((v) => !v)}
          >
            <span></span>
            <span></span>
          </div>
          <li className={styles['linkLi']}>
            <AnchorLink
              className={styles['link']}
              onAnchorLinkClick={() => setOpenMenu((v) => !v)}
              to="/#about"
            >
              学生団体withとは
            </AnchorLink>
          </li>
          <li className={styles['linkLi']}>
            <AnchorLink
              className={styles['link']}
              onAnchorLinkClick={() => setOpenMenu((v) => !v)}
              to="/#blog"
            >
              ブログ
            </AnchorLink>
          </li>
          <li className={styles['linkLi']}>
            {siteMetadata && (
              <a
                className={styles['link']}
                href={`mailto:${siteMetadata.mail}`}
              >
                お問い合わせ
              </a>
            )}
          </li>
        </ul>
      </div>
    </>
  )
}
