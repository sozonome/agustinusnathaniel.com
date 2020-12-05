import React from "react";
import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import { Link } from "gatsby";

import Layout from "../components/Layout";

const IndexPage = () => {
  return (
    <Layout>
      <Box as="section" alignItems="center" id="intro">
        <Box>
          <Box id="title">
            <Heading
              fontSize={["3xl", "4xl"]}
              marginBottom={2}
              fontWeight="bold"
            >
              Hi!{" "}
              <Text as="span" role="img" aria-label="hand-waving">
                👋
              </Text>
            </Heading>
            <Heading fontSize={["3xl", "4xl"]} fontWeight="bold">
              I'm{" "}
              <Text as="span" color="orange.700">
                Nathan
              </Text>
            </Heading>
            <Text marginY={4}>Tech and design enthusiast.</Text>
          </Box>

          <Box fontSize={["sm", "lg"]} color="white">
            <Flex marginBottom={12}>
              <Box marginTop={4} fontSize="lg" marginRight={2}>
                <Link to="/about">
                  <Button
                    backgroundColor="orange.600"
                    borderRadius={4}
                    _hover={{ backgroundColor: "green.600" }}
                  >
                    About Me
                  </Button>
                </Link>
              </Box>

              <Box marginTop={4} fontSize="lg">
                <Link to="/blog">
                  <Button
                    backgroundColor="blue.600"
                    borderRadius={4}
                    _hover={{ backgroundColor: "green.600" }}
                  >
                    Blog
                  </Button>
                </Link>
              </Box>
            </Flex>
          </Box>
        </Box>
      </Box>
    </Layout>
  );
};

export default IndexPage;
