import * as React from 'react'
import Moment from 'react-moment'

import * as styles from '@/components/Blogs/Blogs.module.scss'
import { useGetBlogs } from '@/hooks'

export const Blogs: React.FC = () => {
  const blogs = useGetBlogs()
  return (
    blogs && (
      <>
        <div className={styles['blogGroup']}>
          {blogs.slice(0, 3).map((blog) => {
            return (
              <a href={blog?.link ?? ''} key={blog?.id}>
                <article className={styles['blog']}>
                  <img
                    alt={blog?.title ?? ''}
                    src={blog?.thumbnailLink ?? ''}
                    className={styles['thumbnail']}
                  ></img>
                  <h3 className={styles['title']}>{blog?.title}</h3>
                  <p className={styles['description']}>{blog?.description}</p>
                  {/* <Moment format="YYYYMMDD">{blog?.date ?? ''}</Moment> */}
                </article>
              </a>
            )
          })}
        </div>
      </>
    )
  )
}
