import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import * as React from 'react'

import * as styles from '@/components/Main/Main.module.scss'
import { Polygon } from '@/components/common'
import { useContent } from '@/hooks'
import iconPath from '@/images/logo/icon.svg'

export const Main: React.FC = () => {
  const content = useContent()

  return (
    content && (
      <section className={styles['main']} id="about">
        <div className={styles['decoration']}>
          <Polygon className={styles['polygonDeco1']} sides={15} padding={10} />
          <Polygon className={styles['polygonDeco2']} sides={15} padding={10} />
          <Polygon className={styles['polygonDeco3']} sides={15} padding={10} />
          <div className={styles['circleDeco1']} />
          <div className={styles['circleDeco2']} />
          {[...Array(6)].map((_, i) => {
            const image = getImage(
              (() => {
                switch (i + 1) {
                  case 1:
                    return content.decorativeImgixImage1
                  case 2:
                    return content.decorativeImgixImage2
                  case 3:
                    return content.decorativeImgixImage3
                  case 4:
                    return content.decorativeImgixImage4
                  case 5:
                    return content.decorativeImgixImage5
                  case 6:
                    return content.decorativeImgixImage6
                  default:
                    return content.decorativeImgixImage1
                }
              })().gatsbyImageData
            )
            return (
              image && (
                <GatsbyImage
                  className={styles[`imageDeco${i + 1}`]}
                  key={i}
                  image={image}
                  alt=""
                />
              )
            )
          })}
        </div>
        <Polygon className={styles['polygon']} sides={30} />
        <div className={styles['content']}>
          <img
            className={styles['icon']}
            src={iconPath}
            alt="学生団体withアイコン"
          />
          <h1 className={styles['title']}>{content.title}</h1>
          <p className={styles['description']}>{content.description}</p>
        </div>
      </section>
    )
  )
}
