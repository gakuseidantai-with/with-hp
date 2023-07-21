import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import * as React from 'react'
import { Autoplay, EffectFade } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import * as styles from '@/components/Top/Top.module.scss'
import { useContent } from '@/hooks'

import 'swiper/scss'
import 'swiper/scss/autoplay'
import 'swiper/scss/effect-fade'

export const Top: React.FC = () => {
  const content = useContent()

  return (
    content && (
      <section className={styles['top']} id="top">
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
          {content.topImages.map((topImage) => {
            const image = getImage(topImage.imgixImage.gatsbyImageData)
            return (
              image && (
                <SwiperSlide
                  className={styles['imageWrap']}
                  key={topImage.imgixImage.url}
                >
                  <GatsbyImage
                    className={styles['image']}
                    image={image}
                    alt=""
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
