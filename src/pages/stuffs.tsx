import React from "react";
import { Box, Flex, Heading, Link, Text, useColorMode } from "@chakra-ui/react";

import Layout from "../components/Layout";

import SznmIcon from "../images/avataaars.svg";
import CheroCapturesIcon from "../images/cherocaptures-icon.jpg";
import StuffCard, { StuffCardProps } from "../components/StuffCard";

const Stuffs = () => {
  const stuffsList: StuffCardProps[] = [
    {
      href: "https://sznm.dev",
      imgSrc: SznmIcon,
      title: "sozonome",
      description: "My personal dev site and projects showcase.",
    },
    {
      href: "https://cherocaptures.com",
      imgSrc: CheroCapturesIcon,
      title: "CheroCaptures",
      description:
        "Photography and Videography services for family / couple sessions / events.",
    },
  ];

  return (
    <Layout>
      <Heading size="xl" fontWeight="bold">
        Some Stuffs I'm Working On
      </Heading>
      <Box marginY={4}>
        {stuffsList.map((stuffProps, index) => (
          <StuffCard {...stuffProps} key={index} />
        ))}
      </Box>
    </Layout>
  );
};

export default Stuffs;
