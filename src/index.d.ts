declare module '*.scss' {
  const classNames: {
    [className: string]: string
  }
  export = classNames
}

declare module '*.svg' {
  const content: React.FC<React.SVGProps<SVGElement>>
  export default content
}
