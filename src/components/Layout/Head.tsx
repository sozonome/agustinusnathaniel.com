import React from "react";
import { Box, Flex, Text, useColorMode } from "@chakra-ui/react";
import { Link } from "gatsby";

import MyIcon from "../../images/coconate.png";
import ThemeToggle from "./ThemeToggle";
import Nav from "./Nav";

const Head = () => {
  const { colorMode } = useColorMode();
  const hoverColor = colorMode === "light" ? "orange.300" : "white";

  return (
    <Flex width="100%" height={24} alignItems="center" paddingX={6}>
      <Box
        width={["25%", "50%"]}
        fontWeight="bold"
        _hover={{ color: hoverColor }}
      >
        <Link to="/">
          <Flex>
            <Box width={[8, 12]} marginRight={2}>
              <img src={MyIcon} alt="agustinusnathaniel" />
            </Box>
            <Text paddingY={3} display={["none", "flex"]}>
              Agustinus Nathaniel
            </Text>
          </Flex>
        </Link>
      </Box>

      <Flex marginLeft="auto" gridGap={2} alignItems="center">
        <Nav />
        <ThemeToggle />
      </Flex>
    </Flex>
  );
};

export default Head;
