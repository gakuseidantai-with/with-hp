import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import * as React from 'react'
import { Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/autoplay'

import * as styles from '@/components/Activities/Activities.module.scss'
import { Glasses } from '@/components/Activities/Glasses'
import { SectionTitle } from '@/components/Common/SectionTitle'
import { useGetActivities } from '@/hooks'

export const Activities: React.FC = () => {
  const activities = useGetActivities()
  return (
    activities && (
      <section className={styles['activities']}>
        <Swiper
          spaceBetween={50}
          grabCursor={true}
          slidesPerView={3}
          centeredSlides={true}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          speed={1000}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
          modules={[Autoplay]}
        >
          <SwiperSlide>
            <div className={styles['testSlide']}>
              <div className={styles['testContainer']}>Slide 1</div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles['testSlide']}>
              <div className={styles['testContainer']}>Slide 2</div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles['testSlide']}>
              <div className={styles['testContainer']}>Slide 3</div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles['testSlide']}>
              <div className={styles['testContainer']}>Slide 4</div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles['testSlide']}>
              <div className={styles['testContainer']}>Slide 5</div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles['testSlide']}>
              <div className={styles['testContainer']}>Slide 6</div>
            </div>
          </SwiperSlide>
          ...
        </Swiper>
        <SectionTitle title="活動紹介"></SectionTitle>
        <div className={styles['activitiesGroup']}>
          {activities.slice(0, 3).map((activity, index) => {
            return (
              <React.Fragment
                key={activity.activitiesId + 'fragment' + String(index)}
              >
                <Swiper loop={true}>
                  {activity.images.map((imageData, index) => {
                    const image = getImage(imageData.imgixImage)
                    return (
                      <SwiperSlide
                        key={activity.activitiesId + ':' + String(index)}
                      >
                        <GatsbyImage
                          className={styles['image']}
                          image={image!}
                          alt={activity.activitiesId + ':' + String(index)} // alt={image!.alt}
                        />
                      </SwiperSlide>
                    )
                  })}
                </Swiper>

                <article className={styles['container']}>
                  <h3 className={styles['title']}>{activity.title}</h3>
                  <div className={styles['glassesGroup']}>
                    {[...Array(7)].map((_, index) => {
                      return <Glasses key={index} />
                    })}
                  </div>
                  <p className={styles['description']}>
                    {activity.description}
                  </p>
                </article>
              </React.Fragment>
            )
          })}
        </div>
      </section>
    )
  )
}
