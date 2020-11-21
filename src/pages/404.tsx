import React from "react";
import { Link } from "gatsby";
import { Box, Button, Heading } from "@chakra-ui/react";

import Layout from "../components/Layout";

import Oops from "../images/404-bot-amico.svg";

const Page404 = () => {
  return (
    <Layout>
      <Box paddingX={2} textAlign={["center", "left"]}>
        <Box width={["100%", "50%"]}>
          <img src={Oops} alt="" />
        </Box>
        <Heading size="lg" marginBottom={4}>
          Looks like you're lost.
        </Heading>
        <Link to="/">
          <Button
            padding={2}
            fontSize="md"
            backgroundColor="blue.700"
            _hover={{ color: "teal.700", backgroundColor: "blue.300" }}
          >
            Let's get back
          </Button>
        </Link>
      </Box>
    </Layout>
  );
};

export default Page404;
