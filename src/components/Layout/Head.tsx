import React from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import { Link } from "gatsby";

import MyIcon from "../../images/coconate.png";

const Head = () => {
  return (
    <Flex className="w-full flex text-gray-600 h-24 items-center px-6">
      <Box className="w-1/4 sm:w-1/2 font-bold hover:text-white">
        <Link className="flex" to="/">
          <img
            className="h-12 w-12 mr-2"
            src={MyIcon}
            alt="agustinusnathaniel"
          />
          <Text className="py-3 hidden sm:flex">Agustinus Nathaniel</Text>
        </Link>
      </Box>
      <Box className="flex w-1/2 justify-center sm:justify-end">
        <Link className="hover:text-white" to="/blog">
          Blog
        </Link>
        <Link className="pl-3 hover:text-white" to="/about">
          About
        </Link>
        {/* <Link className="pl-3 hover:text-white" to="/contact">Contact</Link> */}
        <a
          href={
            "mailto:hello@agustinusnathaniel.com?subject=Let%27s%20Work%20Together&cc=agustinusnathaniel228@gmail.com"
          }
          className="pl-3 hover:text-white"
        >
          Contact
        </a>
      </Box>
    </Flex>
  );
};

export default Head;
