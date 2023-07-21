import * as React from 'react'
import Swiper, { EffectFade } from 'swiper'
import { Swiper as SwiperEl, SwiperSlide } from 'swiper/react'

import * as styles from '@/components/Activities/Activities.module.scss'
import { Activity } from '@/components/Activities/Activity'
import { IconTitle } from '@/components/common'
import { useActivities } from '@/hooks'

import 'swiper/scss'
import 'swiper/scss/effect-fade'

export const Activities: React.FC = () => {
  const activities = useActivities()

  const swiperRef = React.useRef<Swiper>()
  const slideNext = () => {
    if (swiperRef.current) swiperRef.current.slideNext()
  }
  const slidePrev = () => {
    if (swiperRef.current) swiperRef.current.slidePrev()
  }

  return activities.length ? (
    <section className={styles['activities']} id="activity">
      <span className={styles['title']}>
        <IconTitle>活動紹介</IconTitle>
      </span>
      <div className={styles['activitiesGroup']}>
        <SwiperEl
          onSwiper={(swiper) => {
            swiperRef.current = swiper
          }}
          allowTouchMove={false}
          centeredSlides={true}
          effect={'fade'}
          loop={true}
          modules={[EffectFade]}
        >
          {activities.map((activity) => (
            <SwiperSlide key={activity.id} className={styles['activity']}>
              <Activity activity={activity} prev={slidePrev} next={slideNext} />
            </SwiperSlide>
          ))}
        </SwiperEl>
      </div>
    </section>
  ) : (
    <></>
  )
}
