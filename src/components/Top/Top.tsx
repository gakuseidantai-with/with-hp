import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import * as React from 'react'

import { useTopImages } from '@/hooks'

const Top: React.FC = () => {
  const topImages = useTopImages()

  return (
    topImages && (
      <>
        {topImages.map((topImage) => {
          const image = getImage(topImage.imgixImage.gatsbyImageData)
          return (
            image && (
              <GatsbyImage key={topImage.id} image={image} alt={topImage.alt} />
            )
          )
        })}
      </>
    )
  )
}

export default Top
