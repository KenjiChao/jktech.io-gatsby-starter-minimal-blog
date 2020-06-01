/** @jsx jsx */
import { jsx } from "theme-ui"
import { Link } from "gatsby"
import Layout from "./layout"
import Title from "./title"
import Listing from "./listing"
import List from "./list"
import useMinimalBlogConfig from "../hooks/use-minimal-blog-config"
import replaceSlashes from "../utils/replaceSlashes"
// @ts-ignore
import Hero from "../texts/hero"
// @ts-ignore
import Bottom from "../texts/bottom"

type PostsProps = {
  posts: {
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
  }[]
}

const Homepage = ({ posts }: PostsProps) => {
  const { basePath, blogPath } = useMinimalBlogConfig()

  return (
    <Layout>
      <section sx={{ mb: [5], p: { fontSize: [1, 2, 3], mt: 2 } }}>
        <Hero />
      </section>
      <Title text="最新文章">
        <Link to={replaceSlashes(`/${basePath}/${blogPath}`)}><span sx={{color: `primary`}}>查看所有文章</span></Link>
      </Title>
      <Listing posts={posts} showTags={true} />
      <List>
        <Bottom />
      </List>
    </Layout>
  )
}

export default Homepage