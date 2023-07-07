import { graphql, useStaticQuery } from 'gatsby'
import { useMemo } from 'react'

type Article = {
  id: string | null
  title: string | null
  link: string | null
  description: string | null
  content: string | null
  date: string | null
  thumbnailLink: string | null
}

export const useBlogs = () => {
  const { allFeedWithBlog } = useStaticQuery<Queries.GetBlogsQuery>(
    graphql`
      query GetBlogs {
        allFeedWithBlog {
          edges {
            node {
              id
              title
              content
              link
              pubDate
            }
          }
        }
      }
    `
  )
  const thumbnailLinkRegex = useMemo(
    (): RegExp =>
      /src="(https:\/\/stat\.ameba\.jp\/user_images\/.*?(.png|.jpe?g).*?)"/,
    []
  )
  let articleList: Article[] = []
  articleList = allFeedWithBlog.edges.slice(0, 6).map((item) => {
    // console.log(item.node.content)
    // サムネイル用URLを本文から全件取得
    const thumbnailLinkList: RegExpMatchArray | null =
      item.node.content?.match(new RegExp(thumbnailLinkRegex, 'g')) ?? null
    // 本文の一番最後に使われている画像をサムネイルとする
    const thumbnailLink: string =
      (thumbnailLinkList && thumbnailLinkList.slice(-1)[0]) ?? ''
    // 記事モデルにマッピング
    return {
      id: item.node.id,
      title: item.node.title,
      link: item.node.link,
      description: `${item.node.content
        ?.replace(/<[^>]+>/g, '')
        .trim()
        .slice(0, 60)}`,
      content: item.node.content,
      date: item.node.pubDate,
      thumbnailLink:
        thumbnailLinkRegex.exec(thumbnailLink)?.[1] ?? '/images/with_logo.svg',
    }
  })

  return articleList
}
