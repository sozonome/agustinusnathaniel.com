import { Box, Flex, Heading, Link, Text } from "@chakra-ui/react";
import React from "react";

const ProjectCard = (props: any) => {
  return (
    <Box
      width="100%"
      marginY={2}
      backgroundColor="gray.900"
      _hover={{ backgroundColor: "blue.800" }}
      padding={4}
      borderRadius={8}
    >
      <Heading size="lg" fontWeight="bold">
        {props.value.title}
      </Heading>
      <Text fontSize="sm" marginBottom={4}>
        {props.value.description}
      </Text>
      <Flex>
        {props.value.projectLink ? (
          <Link
            fontWeight="bold"
            backgroundColor="teal.800"
            _hover={{ backgroundColor: "orange.600", color: "white" }}
            borderRadius={8}
            padding={2}
            marginRight={2}
            href={props.value.projectLink}
            isExternal
            rel="noreferrer noopener"
          >
            Visit
          </Link>
        ) : null}
        {props.value.repoLink ? (
          <Link
            fontWeight="bold"
            borderColor="blue.200"
            borderWidth="2px"
            _hover={{ backgroundColor: "white", color: "black" }}
            borderRadius={8}
            padding={2}
            marginRight={2}
            href={props.value.repoLink}
            isExternal
            rel="noreferrer noopener"
          >
            Source
          </Link>
        ) : null}
      </Flex>
    </Box>
  );
};

export default ProjectCard;
