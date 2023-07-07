import * as React from 'react'
import Moment from 'react-moment'

import * as styles from '@/components/Blogs/Blogs.module.scss'
import { IconTitle } from '@/components/common'
import { useBlogs } from '@/hooks'

export const Blogs: React.FC = () => {
  const blogs = useBlogs()
  return (
    blogs && (
      <section className={styles['blogs']}>
        <IconTitle>withブログ</IconTitle>
        <div className={styles['blogGroup']}>
          {blogs.slice(0, 3).map((blog, index) => {
            return (
              <a
                href={blog?.link ?? ''}
                key={blog?.id}
                className={styles['wrapperBlog']}
              >
                <article className={styles['blog']}>
                  <img
                    alt={blog?.title ?? ''}
                    src={blog?.thumbnailLink ?? ''}
                    className={styles['thumbnail']}
                  ></img>
                  <h3 className={styles['title']}>{blog?.title}</h3>
                  <p className={styles['description']}>{blog?.description}</p>
                  {/* <Moment format="YYYYMMDD">{blog?.date ?? ''}</Moment> */}
                  {index === 0 ? (
                    <div className={styles['dateLabel']}>
                      <Moment format="YYYY">{blog?.date ?? ''}</Moment>
                      <Moment format="MMDD">{blog?.date ?? ''}</Moment>
                    </div>
                  ) : (
                    <></>
                  )}
                </article>
              </a>
            )
          })}
        </div>
        <a href="https://ameblo.jp/gakuren/" className={styles['moreBlogs']}>
          もっとブログを見る　＞
        </a>
      </section>
    )
  )
}
