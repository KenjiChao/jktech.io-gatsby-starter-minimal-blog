/** @jsx jsx */
import React from "react"
import { jsx, Link as TLink } from "theme-ui"
import { Box } from "@theme-ui/components"
import { Link } from "gatsby"
import ItemTags from "./item-tags"
import replaceSlashes from "../utils/replaceSlashes";
import Title from "./title";

type BlogListItemProps = {
  post: {
    slug: string
    title: string
    date: string
    excerpt: string
    description: string
    timeToRead?: number
    tags?: {
      name: string
      slug: string
    }[]
  }
  showTags?: boolean
}

const BlogListItem = ({ post, showTags = true }: BlogListItemProps) => (
  <Box mb={4}>
    <TLink as={Link} to={post.slug} sx={{ fontSize: [3, 4], color: `heading` }}>
      {post.title}
    </TLink>
    <br></br>
    <TLink as={Link} to={post.slug} sx={{ fontSize: [1, 2], color: `secondary` }}>
      {post.excerpt}
    </TLink>
    <p sx={{ color: `secondary`, mt: 1, a: { color: `primary` }, fontSize: [1, 1, 2] }}>
      {`閱讀時間 `} {post.timeToRead * 3 - 1} {` 分鐘  `}
      <br></br>
      <time>{post.date}</time>
      {post.tags && showTags && (
        <React.Fragment>
          {` — `}
          <ItemTags tags={post.tags} />
        </React.Fragment>
      )}
    </p>
  </Box>
)

export default BlogListItem
