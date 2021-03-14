import React from "react";
import { Box, Heading, Link, Text } from "@chakra-ui/react";

import Layout from "../components/Layout";

import { useSiteMetadata } from "../queries/siteQuery";

import profileImg from "../images/profile.jpg";

const About = () => {
  const { social } = useSiteMetadata();

  return (
    <Layout>
      <Box>
        <Heading size="xl" fontWeight="bold">
          About me
        </Heading>

        <Box as="section" id="intro" marginTop={4}>
          <Text marginBottom={4} fontSize="md">
            Hi! I'm{" "}
            <Link
              href={"https://www.instagram.com/" + social.instagram}
              width={8}
              color="orange.600"
              _hover={{ color: "blue.400", fontWeight: "bold" }}
              textDecoration="underline"
              isExternal
              rel="noopener noreferrer"
            >
              Agustinus Nathaniel
            </Link>
            , also known as{" "}
            <Link
              href={"https://www.instagram.com/" + social.devInstagram}
              width={8}
              color="orange.600"
              _hover={{ color: "blue.400", fontWeight: "bold" }}
              textDecoration="underline"
              isExternal
              rel="noopener noreferrer"
            >
              @sozonome.
            </Link>
            <br />I love to explore and learn stuffs around technology and
            design. I believe experiences + mistakes are the greatest teacher
            and learning is a lifetime process.
          </Text>
          <Box width="50%" marginBottom={4}>
            <img
              src={profileImg}
              style={{ borderRadius: "1rem" }}
              alt="Agustinus Nathaniel"
            />
          </Box>
          <Box>
            <Heading
              size="xl"
              fontWeight="bold"
              marginTop={12}
              color="teal.400"
            >
              Lists
            </Heading>
            <Heading size="sm" fontWeight="semibold" marginBottom={2}>
              Some lists or recommendations of stuffs I like and/or use.
            </Heading>
            <Box marginBottom={4} fontSize="md">
              <Link
                href="https://base.sznm.dev/bookmarks"
                color="teal.500"
                _hover={{ color: "teal.200", textDecoration: "underline" }}
                fontWeight="semibold"
                isExternal
                rel="noopener noreferrer"
              >
                Bookmarks
              </Link>
            </Box>
          </Box>
        </Box>
      </Box>
    </Layout>
  );
};

export default About;
