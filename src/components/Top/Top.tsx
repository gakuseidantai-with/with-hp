import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import * as React from 'react'
import { Autoplay, EffectFade } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import * as styles from '@/components/Top/Top.module.scss'
import { useTopImages } from '@/hooks'

import 'swiper/scss'
import 'swiper/scss/effect-fade'
import 'swiper/css/autoplay'

export const Top: React.FC = () => {
  const topImages = useTopImages()

  return (
    topImages && (
      <section className={styles['top']}>
        <Swiper
          className={styles['swiper']}
          allowTouchMove={false}
          centeredSlides={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          speed={1000}
          effect={'fade'}
          loop={true}
          modules={[Autoplay, EffectFade]}
        >
          {topImages.map((topImage) => {
            const image = getImage(topImage.imgixImage.gatsbyImageData)
            return (
              image && (
                <SwiperSlide className={styles['imageWrap']} key={topImage.id}>
                  <GatsbyImage
                    className={styles['image']}
                    image={image}
                    alt={topImage.alt}
                  />
                </SwiperSlide>
              )
            )
          })}
        </Swiper>
      </section>
    )
  )
}
