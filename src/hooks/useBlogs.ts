import { graphql, useStaticQuery } from 'gatsby'

export const useBlogs = () => {
  const { allFeedWithBlog } = useStaticQuery<Queries.GetBlogsQuery>(
    graphql`
      query GetBlogs {
        allFeedWithBlog {
          nodes {
            id
            title
            description
            link
            pubDate
            thumbnailUrl
          }
        }
      }
    `
  )

  return allFeedWithBlog.nodes
}
