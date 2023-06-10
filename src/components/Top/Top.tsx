import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import * as React from 'react'

import * as styles from '@/components/Top/Top.module.scss'
import { useTopImages } from '@/hooks'

export const Top: React.FC = () => {
  const topImages = useTopImages()

  return (
    topImages && (
      <section className={styles['top']}>
        {topImages.map((topImage) => {
          const image = getImage(topImage.imgixImage.gatsbyImageData)
          return (
            image && (
              <GatsbyImage
                className={styles['image']}
                key={topImage.id}
                image={image}
                alt={topImage.alt}
              />
            )
          )
        })}
      </section>
    )
  )
}
