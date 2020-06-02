/** @jsx jsx */
import { jsx, Link as TLink, Heading } from "theme-ui"
import { Box, Flex } from "@theme-ui/components"
import kebabCase from "lodash.kebabcase"
import { Link } from "gatsby"
import Layout from "./layout"
import useMinimalBlogConfig from "../hooks/use-minimal-blog-config"
import SEO from "./seo"
import replaceSlashes from "../utils/replaceSlashes"

type PostsProps = {
  list: {
    fieldValue: string
    totalCount: number
  }[]
}

const Tags = ({ list }: PostsProps) => {
  const { tagsPath, blogPath, basePath } = useMinimalBlogConfig()

  return (
    <Layout>
      <SEO title="Tags" />
      <Flex sx={{ alignItems: `center`, justifyContent: `space-between`, flexFlow: `wrap` }}>
        <Heading variant="styles.h3">標籤</Heading>
        <TLink as={Link} sx={{ variant: `links.secondary`, color: `primary`}} to={replaceSlashes(`/${basePath}/${blogPath}`)}>
          查看所有文章
        </TLink>
      </Flex>
      <Box mt={[4, 5]}>
        {list.sort((l1, l2) => l2.totalCount - l1.totalCount)
          .map((listItem) => (
          <Flex key={listItem.fieldValue} mb={[1, 1, 2]} sx={{ alignItems: `center` }}>
            <TLink
              as={Link}
              sx={{ variant: `links.listItem`, mr: 2, color: `primary` }}
              to={replaceSlashes(`/${basePath}/${tagsPath}/${kebabCase(listItem.fieldValue)}`)}
            >
              {listItem.fieldValue} <span>({listItem.totalCount})</span>
            </TLink>
          </Flex>
        ))}
      </Box>
    </Layout>
  )
}

export default Tags
