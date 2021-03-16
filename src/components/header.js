import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { Box, Text } from "@chakra-ui/react"

const Header = ({ siteTitle }) => (
  <Box as={"header"} backgroundColor="black">
    <Box
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`
      }}
    >
      <Text
        as={Link}
        to="/"
        color={"white"}
        textDecoration={"none"}
        fontWeight={"bold"}
        fontSize={"2xl"}
      >
        {siteTitle}
      </Text>
    </Box>
  </Box>
)

Header.propTypes = {
  siteTitle: PropTypes.string
}

Header.defaultProps = {
  siteTitle: ``
}

export default Header
