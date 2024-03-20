import { motion } from 'framer-motion'
import Moment from 'react-moment'

import * as styles from '@/components/Blogs/Blogs.module.scss'
import { IconTitle } from '@/components/common'
import { useBlogs } from '@/hooks'

export const Blogs: React.FC = () => {
  const blogs = useBlogs()
  return blogs.length ? (
    <section className={styles['blogs']} id="blog">
      <IconTitle>withブログ</IconTitle>
      <div className={styles['blogGroup']}>
        {blogs.slice(0, 3).map((blog) => {
          return (
            <a
              className={styles['blog']}
              key={blog.id}
              href={blog.link ?? void 0}
              target="_blank"
              rel="noopener noreferrer"
            >
              <motion.article
                initial={{ opacity: 0, y: 30 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.5,
                  },
                }}
                viewport={{ once: true, margin: '-30% 0px' }}
              >
                <img src={blog.thumbnailUrl} alt="" />
                {blog.pubDate && (
                  <Moment className="" format="YYYY/MM/DD">
                    {blog.pubDate}
                  </Moment>
                )}
                <h3>{blog.title}</h3>
                <p>{blog.description}</p>
              </motion.article>
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
        もっとブログを見る
        <span className="material-symbols-outlined">navigate_next</span>
      </a>
    </section>
  ) : (
    <></>
  )
}
