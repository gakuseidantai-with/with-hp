import * as React from 'react'
import Moment from 'react-moment'

import * as styles from '@/components/Blogs/Blogs.module.scss'
import { IconTitle } from '@/components/common'
import { useBlogs } from '@/hooks'

export const Blogs: React.FC = () => {
  const blogs = useBlogs()
  return blogs.length ? (
    <section className={styles['blogs']}>
      <IconTitle>withブログ</IconTitle>
      <div className={styles['blogGroup']}>
        {blogs.slice(0, 3).map((blog, index) => {
          return (
            <a
              className={styles['wrapperBlog']}
              key={blog.id}
              href={blog.link ?? void 0}
              target="_blank"
              rel="noopener noreferrer"
            >
              <article className={styles['blog']}>
                <img
                  className={styles['thumbnail']}
                  src={blog.thumbnailUrl}
                  alt=""
                />
                <h3 className={styles['title']}>{blog.title}</h3>
                <p className={styles['description']}>{blog.description}</p>
                {!index && blog.pubDate && (
                  <div className={styles['dateLabel']}>
                    <Moment format="YYYY">{blog.pubDate}</Moment>
                    <Moment format="MMDD">{blog.pubDate}</Moment>
                  </div>
                )}
              </article>
            </a>
          )
        })}
      </div>
      <a
        className={styles['moreBlogs']}
        href="https://ameblo.jp/gakuren"
        target="_blank"
        rel="noopener noreferrer"
      >
        もっとブログを見る　＞
      </a>
    </section>
  ) : (
    <></>
  )
}
