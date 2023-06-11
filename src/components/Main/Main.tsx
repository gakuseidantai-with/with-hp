import * as React from 'react'

import { Polygon } from '@/components/Common/Polygon'
import * as styles from '@/components/Main/Main.module.scss'
import iconPath from '@/images/logo/icon.svg'

export const Main: React.FC = () => {
  return (
    <section className={styles['main']}>
      <div className={styles['decoration']}>
        <Polygon className={styles['polygonDeco1']} sides={15} padding={10} />
        <Polygon className={styles['polygonDeco2']} sides={15} padding={10} />
        <Polygon className={styles['polygonDeco3']} sides={15} padding={10} />
        <div className={styles['circleDeco1']} />
        <div className={styles['circleDeco2']} />
        {/* TODO: Use Gatsby Static Image */}
        <img
          className={styles['imageDeco1']}
          src="https://images.microcms-assets.io/assets/d60c88ce4c9041c2bfda68a5d8bab133/d226163240eb4479aefbadd5c34e50bd/o1080072015196799802.jpg"
          alt="a"
        />
        <img
          className={styles['imageDeco2']}
          src="https://images.microcms-assets.io/assets/d60c88ce4c9041c2bfda68a5d8bab133/0a518eb5ecad4e20af5ca61c8d05f26b/o1080072015196799778.jpg"
          alt="a"
        />
        <img
          className={styles['imageDeco3']}
          src="https://images.microcms-assets.io/assets/d60c88ce4c9041c2bfda68a5d8bab133/ee3d1e9709b8455fa8f63376b599fc48/image02-fab57716204ceb4506b13bae2833393053277c978f3d5236c34e06e61e39f681.jpg"
          alt="a"
        />
        <img
          className={styles['imageDeco4']}
          src="https://images.microcms-assets.io/assets/d60c88ce4c9041c2bfda68a5d8bab133/e2d45b1e1e2d4a1bb12cbbcd4e6ed54b/Top4.png"
          alt="a"
        />
        <img
          className={styles['imageDeco5']}
          src="https://images.microcms-assets.io/assets/d60c88ce4c9041c2bfda68a5d8bab133/7ff02edd81d4479e9f3b6a072cff3007/Top2.png"
          alt="a"
        />
        <img
          className={styles['imageDeco6']}
          src="https://images.microcms-assets.io/assets/d60c88ce4c9041c2bfda68a5d8bab133/612d7f64ed8b4c78b044ad261b8d1f0e/Top1.png"
          alt="a"
        />
      </div>
      <Polygon className={styles['polygon']} sides={30} />
      <div className={styles['content']}>
        <img
          className={styles['icon']}
          src={iconPath}
          alt="学生団体withアイコン"
        />
        <h1 className={styles['title']}>人と人とをつなぐ、つながる</h1>
        <p className={styles['description']}>
          地元学生に刺激を与え「意識改革」「スキルアップ」を促し、自ら行動するきっかけを与えるため2011年1月に「学生団体with」を設立。
          現在では地域の人に頼られる存在となり、全国からも注目を浴びる鯖江市の地方創生に大きく貢献しています。
          近年は、グローバル企業や地元企業と連携した取り組みも行うなど活動の幅を広げています。
        </p>
      </div>
    </section>
  )
}
