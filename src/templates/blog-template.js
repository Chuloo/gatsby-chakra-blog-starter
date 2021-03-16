import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Box, Center, HStack, Text } from "@chakra-ui/react"
import "./blog-template.css"

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        publishBy
        title
      }
      timeToRead
      wordCount {
        words
      }
    }
  }
`

const BlogPost = ({ data }) => {
  const post = data.markdownRemark
  return (
    <Layout>
      <SEO title="Home" />
      <Text my={5} fontSize={"3xl"} fontWeight={"bold"}>
        {post.frontmatter.title}
      </Text>
      <Box mb={10}>
        <Center>
          <HStack spacing={5} mt={3}>
            <Text color={"gray.400"} fontSize={"xs"}>
              {post.timeToRead} {post.timeToRead > 1 ? "mins read" : "min read"}
            </Text>
            <Text color={"gray.400"} fontSize={"xs"}>
              {post.frontmatter.publishBy}
            </Text>
          </HStack>
        </Center>
      </Box>
      <Box
        dangerouslySetInnerHTML={{ __html: post.html }}
        className={"blog-content"}
      />
    </Layout>
  )
}

export default BlogPost
