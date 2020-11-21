import React from "react";
import { Box, Flex, Heading, Link, Text } from "@chakra-ui/react";

import Layout from "../components/Layout";

import SznmIcon from "../images/avataaars.svg";
import CheroCapturesIcon from "../images/cherocaptures-icon.jpg";

const Stuffs = () => {
  return (
    <Layout>
      <Heading size="xl" fontWeight="bold">
        Some Stuffs I'm Working On
      </Heading>
      <Box marginY={4}>
        <Link href="https://sznm.dev" isExternal rel="noopener noreferrer">
          <Flex
            backgroundColor="gray.800"
            _hover={{ backgroundColor: "gray.700" }}
            padding={4}
            borderRadius={8}
            marginBottom={4}
            alignItems="center"
          >
            <Box width={12} marginRight={4}>
              <img src={SznmIcon} alt="sozonome" />
            </Box>

            <Box>
              <Heading size="lg" fontWeight="bold">
                sozonome
              </Heading>
              <Text fontSize="sm">
                My personal dev site and projects showcase.
              </Text>
            </Box>
          </Flex>
        </Link>

        <Link
          href="https://cherocaptures.com"
          isExternal
          rel="noopener noreferrer"
        >
          <Flex
            backgroundColor="gray.800"
            _hover={{ backgroundColor: "gray.700" }}
            padding={4}
            borderRadius={8}
            marginBottom={4}
            alignItems="center"
          >
            <Box width={12} marginRight={4}>
              <img
                src={CheroCapturesIcon}
                style={{ borderRadius: "50%" }}
                alt="sozonome"
              />
            </Box>

            <Box>
              <Heading size="lg" fontWeight="bold">
                CheroCaptures
              </Heading>
              <Text fontSize="sm">
                Photography and Videography services for family / couple
                sessions / events.
              </Text>
            </Box>
          </Flex>
        </Link>
      </Box>
    </Layout>
  );
};

export default Stuffs;
