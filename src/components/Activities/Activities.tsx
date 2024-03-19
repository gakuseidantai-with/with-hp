import { motion, AnimatePresence } from 'framer-motion'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { Fragment, useState } from 'react'
import Swiper, { Autoplay } from 'swiper'
import { Swiper as SwiperEl, SwiperSlide } from 'swiper/react'

import * as styles from '@/components/Activities/Activities.module.scss'
import { IconTitle } from '@/components/common'
import { Glasses, Polygon } from '@/components/common'
import { useActivities } from '@/hooks'

import 'swiper/scss'
import 'swiper/scss/autoplay'

export const Activities: React.FC = () => {
  const activities = useActivities()

  const [swiper, setSwiper] = useState<Swiper | null>(null)
  const slideNext = () => {
    if (swiper) swiper.slideNext()
  }
  const slidePrev = () => {
    if (swiper) swiper.slidePrev()
  }
  const [activeIndex, setActiveIndex] = useState<number>(0)

  return activities.length ? (
    <section className={styles['activities']} id="activity">
      <span className={styles['title']}>
        <IconTitle>活動紹介</IconTitle>
      </span>
      <div className={styles['activitiesGroup']}>
        <SwiperEl
          onSwiper={setSwiper}
          onActiveIndexChange={(swiper) => setActiveIndex(swiper.realIndex)}
          grabCursor={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          speed={750}
          loop={true}
          loopedSlides={activities.length}
          slidesPerView={'auto'}
          centeredSlides={true}
          modules={[Autoplay]}
        >
          {activities.map((activity) => {
            const image = getImage(activity.image.imgixImage)
            return (
              image && (
                <SwiperSlide key={activity.id} className={styles['imageWrap']}>
                  <GatsbyImage
                    className={styles['image']}
                    image={image}
                    alt=""
                  />
                </SwiperSlide>
              )
            )
          })}
        </SwiperEl>
        <div className={styles['container']}>
          <button
            className={`${styles['button']} ${styles['left']}`}
            onClick={slidePrev}
          >
            <Polygon sides={15} className={styles['polygon']} />
            <span className="material-symbols-outlined">chevron_left</span>
          </button>
          <article className={styles['article']}>
            <AnimatePresence initial={false} mode="wait">
              {activities[activeIndex] && (
                <Fragment key={activeIndex}>
                  <motion.h3
                    className={styles['title']}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{
                      duration: 0.25,
                    }}
                  >
                    {activities[activeIndex]!.title}
                  </motion.h3>
                  <div className={styles['glasses']}>
                    {[...Array(7)].map((_, index) => {
                      return <Glasses key={index} />
                    })}
                  </div>
                  <motion.p
                    className={styles['description']}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{
                      duration: 0.25,
                    }}
                  >
                    {activities[activeIndex]!.description}
                    <br />
                    <a
                      className={styles['link']}
                      href={activities[activeIndex]!.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      詳しくはこちら
                      <span className="material-symbols-outlined">
                        open_in_new
                      </span>
                    </a>
                  </motion.p>
                </Fragment>
              )}
            </AnimatePresence>
          </article>
          <button
            className={`${styles['button']} ${styles['right']}`}
            onClick={slideNext}
          >
            <Polygon sides={15} className={styles['polygon']} />
            <span className="material-symbols-outlined">chevron_right</span>
          </button>
        </div>
      </div>
    </section>
  ) : (
    <></>
  )
}
