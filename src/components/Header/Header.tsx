import { motion } from 'framer-motion'
import { AnchorLink } from 'gatsby-plugin-anchor-links'
import { useCallback, useEffect, useRef, useState } from 'react'

import * as styles from '@/components/Header/Header.module.scss'
import { useScrollLock, useSiteMetadata } from '@/hooks'
import logoPath from '@/images/logo/logo.svg'
import taglinePath from '@/images/logo/tagline.svg'
import { isClient } from '@/utils/helper'

export const Header: React.FC = () => {
  const siteMetadata = useSiteMetadata()

  const { lock, unlock } = useScrollLock({
    autoLock: false,
  })

  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)
  const closeMenu = () => {
    setIsMenuOpen(false)
    unlock()
  }
  const toggleMenu = () =>
    setIsMenuOpen((prevIsMenuOpen) => {
      !prevIsMenuOpen ? lock() : unlock()
      return !prevIsMenuOpen
    })

  const [prevScrollPos, setPrevScrollPos] = useState<number>(
    isClient() ? window.scrollY : 0
  )
  const [hidden, setHidden] = useState<boolean>(false)
  const ticking = useRef<boolean>(false)

  const handleScroll = useCallback(() => {
    const currentScrollPos = window.scrollY

    if (!prevScrollPos) {
      setPrevScrollPos(currentScrollPos)
      return
    }

    if (!ticking.current) {
      window.requestAnimationFrame(() => {
        setHidden(
          !isMenuOpen &&
            (currentScrollPos > window.innerHeight / 1.5
              ? prevScrollPos < currentScrollPos
              : false)
        )
        setPrevScrollPos(currentScrollPos)

        ticking.current = false
      })

      ticking.current = true
    }
  }, [isMenuOpen, prevScrollPos])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [handleScroll])

  return (
    <>
      <div id="top" />
      <motion.header
        className={`${styles['header']} ${hidden ? styles['hidden'] : ''}`}
        initial={false}
        animate={isMenuOpen ? 'open' : 'closed'}
      >
        <AnchorLink
          className={styles['glyph']}
          to="/#top"
          onAnchorLinkClick={closeMenu}
        >
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
          <AnchorLink to="/#about" onAnchorLinkClick={closeMenu}>
            学生団体withとは
          </AnchorLink>
          <AnchorLink to="/#blog" onAnchorLinkClick={closeMenu}>
            ブログ
          </AnchorLink>
          {siteMetadata && (
            <a href={`mailto:${siteMetadata.mail}`} onClick={closeMenu}>
              お問い合わせ
            </a>
          )}
        </nav>
        <button className={styles['burger']} onClick={toggleMenu}>
          <svg width="40" height="40" viewBox="0 0 40 40">
            <motion.path
              variants={{
                closed: { d: 'M 5 10 L 35 10' },
                open: { d: 'M 10 30 L 30 10' },
              }}
            />
            <motion.path
              d="M 5 20 L 35 20"
              variants={{
                closed: { opacity: 1 },
                open: { opacity: 0 },
              }}
              transition={{ duration: 0.1 }}
            />
            <motion.path
              variants={{
                closed: { d: 'M 5 30 L 35 30' },
                open: { d: 'M 10 10 L 30 30' },
              }}
            />
          </svg>
        </button>
        <motion.div
          className={styles['menu']}
          variants={{
            closed: {
              clipPath: 'inset(0 0 100%)',
              transition: {
                ease: [0, 0, 0.25, 1.0],
                duration: 0.4,
              },
              transitionEnd: {
                display: 'none',
              },
            },
            open: {
              display: 'flex',
              clipPath: 'inset(0)',
              transition: {
                ease: [0.25, 0.1, 0.25, 1.0],
                duration: 0.4,
              },
            },
          }}
        >
          <AnchorLink to="/#about" onAnchorLinkClick={closeMenu}>
            学生団体withとは
          </AnchorLink>
          <AnchorLink to="/#blog" onAnchorLinkClick={closeMenu}>
            ブログ
          </AnchorLink>
          {siteMetadata && (
            <a href={`mailto:${siteMetadata.mail}`} onClick={closeMenu}>
              お問い合わせ
            </a>
          )}
        </motion.div>
      </motion.header>
    </>
  )
}
