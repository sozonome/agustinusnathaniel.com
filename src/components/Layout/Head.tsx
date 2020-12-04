import React from "react";
import {
  Box,
  Flex,
  Text,
  Link as ChakraLink,
  useColorMode,
} from "@chakra-ui/react";
import { Link } from "gatsby";

import MyIcon from "../../images/coconate.png";
import ThemeToggle from "./ThemeToggle";

const Head = () => {
  const { colorMode } = useColorMode();

  const hoverColor = colorMode === "light" ? "orange.300" : "white";

  return (
    <Flex
      width="100%"
      color="gray.600"
      height={24}
      alignItems="center"
      paddingX={6}
    >
      <Box
        width={["25%", "50%"]}
        fontWeight="bold"
        _hover={{ color: hoverColor }}
      >
        <Link to="/">
          <Flex>
            <Box height={12} width={12} marginRight={2}>
              <img src={MyIcon} alt="agustinusnathaniel" />
            </Box>
            <Text paddingY={3} display={["none", "flex"]}>
              Agustinus Nathaniel
            </Text>
          </Flex>
        </Link>
      </Box>

      <Flex width="50%" justifyContent={["center", "flex-end"]}>
        <Link to="/blog">
          <Text _hover={{ color: hoverColor }}>Blog</Text>
        </Link>
        <Link to="/about">
          <Text paddingLeft={3} _hover={{ color: hoverColor }}>
            About
          </Text>
        </Link>
        <ChakraLink
          href={
            "mailto:hello@agustinusnathaniel.com?subject=Let%27s%20Work%20Together&cc=agustinusnathaniel228@gmail.com"
          }
          paddingLeft={3}
          _hover={{ color: hoverColor }}
          isExternal
        >
          Contact
        </ChakraLink>
      </Flex>

      <Box marginLeft="auto">
        <ThemeToggle />
      </Box>
    </Flex>
  );
};

export default Head;
