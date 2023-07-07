import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import * as React from 'react'
import { useState } from 'react'
import { Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/autoplay'

import * as styles from '@/components/Activities/Activities.module.scss'
import { Activity } from '@/components/Activities/Activity'
import { SectionTitle } from '@/components/Common/SectionTitle'
import { useGetActivities } from '@/hooks'

const customMod = (n: number, m: number) => {
  return ((n % m) + m) % m
}

export const Activities: React.FC = () => {
  const activities = useGetActivities()
  const [index, SetIndex] = useState(0)
  if (activities.length === 0) {
    return <></>
  }
  return (
    activities && (
      <section className={styles['activities']}>
        <SectionTitle title="活動紹介"></SectionTitle>
        <div className={styles['activitiesGroup']}>
          <Activity
            activity={activities[index]!}
            index={index}
            next={() => {
              SetIndex((index) => customMod(index + 1, activities.length))
            }}
            prev={() => {
              SetIndex((index) => customMod(index - 1, activities.length))
            }}
          ></Activity>
        </div>
      </section>
    )
  )
}
