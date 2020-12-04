import React from "react";
import { Box, Flex, useColorMode } from "@chakra-ui/react";

import "typeface-open-sans";
import "fontsource-recursive";

import SEO from "./SEO";
import Head from "./Head";
import Foot from "./Foot";

type LayoutProps = {
  children: any;
};

const Layout = ({ children }: LayoutProps) => {
  const { colorMode } = useColorMode();

  return (
    <Box
      backgroundColor={colorMode === "light" ? "gray.100" : "black"}
      color={colorMode === "light" ? "gray.600" : "gray.400"}
      transition="0.5s ease-out"
    >
      <SEO />
      <Flex
        margin="0 auto"
        flexWrap="wrap"
        maxWidth="800px"
        width="100%"
        minHeight="100vh"
      >
        <Head />
        <Box id="site-content" marginY={8} paddingX={6} width="100%">
          <Box className="fadeTrans">{children}</Box>
        </Box>
        <Foot />
      </Flex>
    </Box>
  );
};

export default Layout;
