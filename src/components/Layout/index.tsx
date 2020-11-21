import React from "react";
import { Box, Flex } from "@chakra-ui/react";

import "typeface-open-sans";
import "fontsource-recursive";

import SEO from "./SEO";
import Head from "./Head";
import Foot from "./Foot";

type LayoutProps = {
  children: any;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <Box backgroundColor="black" color="gray.400">
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
