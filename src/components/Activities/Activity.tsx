import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import * as styles from '@/components/Activities/Activity.module.scss'
import { Glasses, Polygon } from '@/components/common'

import 'swiper/scss'
import 'swiper/scss/autoplay'

type Props = {
  activity: Queries.ActivityFragment
  next: () => void
  prev: () => void
}

export const Activity: React.FC<Props> = ({ activity, next, prev }) => {
  return (
    <>
      <Swiper
        grabCursor={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        speed={1000}
        loop={true}
        loopedSlides={activity.images.length}
        slidesPerView={'auto'}
        centeredSlides={true}
        modules={[Autoplay]}
      >
        {activity.images.map((imageData) => {
          const image = getImage(imageData.imgixImage)
          return (
            image && (
              <SwiperSlide
                className={styles['imageWrap']}
                key={imageData.imgixImage.url}
              >
                <GatsbyImage className={styles['image']} image={image} alt="" />
              </SwiperSlide>
            )
          )
        })}
      </Swiper>
      <div className={styles['articleWrapper']}>
        <div className={styles['spacer']}></div>
        <button
          className={`${styles['button']} ${styles['left']}`}
          onClick={prev}
        >
          <Polygon sides={15} className={styles['polygon']} />
          <div className={styles['arrowButton']}>
            <span className={`${styles['arrow']} ${styles['left']}`} />
          </div>
        </button>
        <article className={styles['container']}>
          <h3 className={styles['title']}>{activity.title}</h3>
          <div className={styles['glassesGroupPC']}>
            {[...Array(7)].map((_, index) => {
              return <Glasses key={index} />
            })}
          </div>
          <div className={styles['glassesGroupWide']}>
            {[...Array(5)].map((_, index) => {
              return <Glasses key={index} />
            })}
          </div>
          <div className={styles['glassesGroupMobile']}>
            {[...Array(3)].map((_, index) => {
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
        <button
          className={`${styles['button']} ${styles['right']}`}
          onClick={next}
        >
          <Polygon sides={15} className={styles['polygon']} />
          <div className={styles['arrowButton']}>
            <span className={`${styles['arrow']} ${styles['right']}`} />
          </div>
        </button>
        <div className={styles['spacer']}></div>
      </div>
    </>
  )
}
