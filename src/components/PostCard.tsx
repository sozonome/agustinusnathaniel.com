import React from "react";
import { Link } from "gatsby";
import { Box, Flex, Heading, Text } from "@chakra-ui/react";

const PostCard = (props: any) => {
  return (
    <Link to={"/blog/" + props.value.node.frontmatter.slug} className="">
      <Flex
        borderRadius={12}
        padding={6}
        marginBottom={4}
        width="100%"
        _hover={{ backgroundColor: "gray.900" }}
        className="postListSingle"
        role="group"
      >
        <Flex marginRight={4} alignItems="center">
          <img
            src={props.value.node.frontmatter.thumbnail}
            alt={props.value.node.frontmatter.title}
          />
        </Flex>
        <Box width="83.33%">
          <Heading
            as="h2"
            size="lg"
            fontWeight="bold"
            _groupHover={{ color: "teal.400" }}
            marginBottom={1}
          >
            {props.value.node.frontmatter.title}
          </Heading>
          <Text
            fontSize="sm"
            color="gray.300"
            fontWeight="light"
            marginBottom={2}
          >
            {props.value.node.frontmatter.date}
          </Text>
        </Box>
      </Flex>
    </Link>
  );
};

export default PostCard;
