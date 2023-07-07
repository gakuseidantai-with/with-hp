import * as React from 'react'

type Props = {
  className?: string
  sides?: number
  radius?: number
  padding?: number
}

export const Polygon: React.FC<Props> = ({
  className,
  sides = 8,
  radius = 200,
  padding = 0,
}) => {
  const radians = (deg: number) => (Math.PI * deg) / 180
  const vb = 2 * radius + padding
  const points = Array(sides)
    .fill(radians(90 - (180 - 360 / sides) / 2))
    .map((offset, idx) => [
      vb / 2 +
        radius * Math.cos(offset + radians((360 / sides) * idx) + Math.PI / 2),
      vb / 2 +
        radius * Math.sin(offset + radians((360 / sides) * idx) + Math.PI / 2),
    ])

  return (
    <svg viewBox={`0 0 ${vb} ${vb}`} className={`${className}`}>
      <polygon points={points.join(' ')}></polygon>
    </svg>
  )
}
