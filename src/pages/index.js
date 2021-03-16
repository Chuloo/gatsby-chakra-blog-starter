import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Box, Text, SimpleGrid, HStack } from "@chakra-ui/react"

export const query = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: frontmatter___publishBy }) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            publishBy
          }
          timeToRead
        }
      }
    }
  }
`

const IndexPage = ({ data }) => {
  const blogPosts = data.allMarkdownRemark.edges

  return (
    <Layout>
      <SEO title="Home" />
      <Text my={5} fontSize={"3xl"} fontWeight={"bold"}>
        Blog Posts
      </Text>
      <SimpleGrid columns={3} spacing={8}>
        {blogPosts &&
          blogPosts.map(({ node }, index) => (
            <Box
              as={Link}
              shadow="md"
              borderWidth="1px"
              rounded={"lg"}
              p={2}
              key={index}
              to={node.fields.slug}
            >
              <Text fontSize={"sm"} mt={3} fontWeight={"500"}>
                {node.frontmatter.title}
              </Text>
              <HStack spcacing={5} mt={1}>
                <Text color={"gray.400"} fontSize={"xs"}>
                  {node.timeToRead} {node.timeToRead > 1 ? "mins" : "min"}
                </Text>
                <Text color={"gray.400"} fontSize={"xs"}>
                  {node.frontmatter.publishBy}
                </Text>
              </HStack>
            </Box>
          ))}
      </SimpleGrid>
    </Layout>
  )
}

export default IndexPage
