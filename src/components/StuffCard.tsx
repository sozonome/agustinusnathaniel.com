import React from "react";
import {
  Avatar,
  Box,
  Flex,
  Heading,
  Link,
  Text,
  useColorMode,
} from "@chakra-ui/react";

export type StuffCardProps = {
  href: string;
  title: string;
  description?: string;
  imgSrc: any;
};

const StuffCard = ({ href, title, description, imgSrc }: StuffCardProps) => {
  const { colorMode } = useColorMode();

  return (
    <Link href={href} isExternal rel="noopener noreferrer">
      <Flex
        backgroundColor={colorMode === "light" ? "gray.200" : "gray.800"}
        _hover={{
          backgroundColor: colorMode === "light" ? "gray.50" : "gray.700",
        }}
        padding={4}
        borderRadius={8}
        marginBottom={4}
        alignItems="center"
      >
        <Flex justifyContent="center" flexBasis="15%" marginRight={4}>
          <Avatar src={imgSrc} alt={title} />
        </Flex>

        <Box flexBasis="85%">
          <Heading size="lg" fontWeight="bold">
            {title}
          </Heading>
          {description && <Text fontSize="sm">{description}</Text>}
        </Box>
      </Flex>
    </Link>
  );
};

export default StuffCard;
