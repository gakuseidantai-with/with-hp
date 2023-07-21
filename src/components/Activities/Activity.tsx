import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import * as React from 'react'
import { Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/autoplay'

import * as styles from '@/components/Activities/Activity.module.scss'
import { Glasses, Polygon } from '@/components/common'

type Props = {
  activity: Queries.ActivityFragment
  index: number
  next: () => void
  prev: () => void
}

export const Activity: React.FC<Props> = ({ activity, index, next, prev }) => {
  return (
    <React.Fragment key={activity.id + 'fragment' + String(index)}>
      <Swiper
        spaceBetween={50}
        grabCursor={true}
        slidesPerView={2.5}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 5000,
        }}
        speed={1000}
        modules={[Autoplay]}
      >
        {[...activity.images, ...activity.images].map((imageData, index) => {
          const image = getImage(imageData.imgixImage)
          return (
            <SwiperSlide key={activity.id + ':' + String(index)}>
              <div className={styles['imageWrap']}>
                <GatsbyImage
                  className={styles['image']}
                  image={image!}
                  alt={activity.id + ':' + String(index)} // alt={image!.alt}
                />
              </div>
            </SwiperSlide>
          )
        })}
      </Swiper>
      <div className={styles['articleWrapper']}>
        <button onClick={prev} className={styles['button']}>
          <Polygon sides={15} className={styles['polygon']}></Polygon>
          <div className={styles['arrowButton']}>
            <span className={`${styles['arrow']} ${styles['left']}`}></span>
          </div>
        </button>

        <article className={styles['container']}>
          <h3 className={styles['title']}>{activity.title}</h3>
          <div className={styles['glassesGroup']}>
            {[...Array(7)].map((_, index) => {
              return <Glasses key={index} />
            })}
          </div>

          <p className={styles['description']}>
            {activity.description}
            <br />
            <a
              className={styles['link']}
              href={activity.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              詳しくはこちら
            </a>
          </p>
        </article>
        <button onClick={next} className={styles['button']}>
          <Polygon sides={15} className={styles['polygon']}></Polygon>
          <div className={styles['arrowButton']}>
            <span className={`${styles['arrow']} ${styles['right']}`}></span>
          </div>
        </button>
      </div>
    </React.Fragment>
  )
}
