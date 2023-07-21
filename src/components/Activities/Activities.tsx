import * as React from 'react'
import { useState } from 'react'

import 'swiper/css'
import 'swiper/css/autoplay'

import * as styles from '@/components/Activities/Activities.module.scss'
import { Activity } from '@/components/Activities/Activity'
import { IconTitle } from '@/components/common'
import { useActivities } from '@/hooks'

const customMod = (n: number, m: number) => {
  return ((n % m) + m) % m
}

export const Activities: React.FC = () => {
  const activities = useActivities()
  const [index, SetIndex] = useState(0)

  return activities.length ? (
    <section className={styles['activities']} id="activity">
      <span className={styles['title']}>
        <IconTitle>活動紹介</IconTitle>
      </span>
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
  ) : (
    <></>
  )
}
