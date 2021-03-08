import React from "react";
import { Link } from "gatsby";
import {
  Box,
  Flex,
  Text,
  Link as ChakraLink,
  useColorMode,
} from "@chakra-ui/react";
import { library, config, IconProp } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { useSiteMetadata } from "../../queries/siteQuery";

config.autoAddCss = false;
library.add(fab);

const Foot = () => {
  const { social } = useSiteMetadata();
  const { colorMode } = useColorMode();

  type SocialLinkButtonProps = {
    link: string;
    icon: IconProp;
  };

  const SocialLinkButton = ({ link, icon }: SocialLinkButtonProps) => (
    <ChakraLink
      width={8}
      href={link}
      _hover={{ color: colorMode === "light" ? "orange.300" : "white" }}
      marginLeft={2}
    >
      <FontAwesomeIcon icon={icon} />
    </ChakraLink>
  );

  const socialLinks: SocialLinkButtonProps[] = [
    {
      link: "https://instagram.com/" + social.instagram,
      icon: ["fab", "instagram"],
    },
    {
      link: "https://youtube.com/" + social.youtube,
      icon: ["fab", "youtube"],
    },
    {
      link: "https://twitter.com/" + social.twitter,
      icon: ["fab", "twitter"],
    },
    {
      link: "https://linkedin.com/in/" + social.linkedin,
      icon: ["fab", "linkedin"],
    },
    {
      link: "https://github.com/" + social.github,
      icon: ["fab", "github"],
    },
  ];

  return (
    <Box width="100%" alignSelf="flex-end">
      <Box
        display={["inherit", "flex"]}
        alignItems="center"
        paddingX={6}
        paddingTop={[2, 0]}
        paddingY={["inherit", 0]}
      >
        <Box
          display={["inherit", "flex"]}
          width={["100%", "50%"]}
          justifyContent={["inherit", "flex-start"]}
          marginTop={2}
          marginBottom={4}
          marginY={["inherit", 0]}
        >
          <Flex alignItems="center" justifyContent="center">
            <Link to="/stuffs">
              <Text _hover={{ color: "gray.300" }} marginRight={4}>
                Stuffs
              </Text>
            </Link>

            <Link to="/rss.xml">
              <Text _hover={{ color: "gray.300" }}>RSS</Text>
            </Link>
          </Flex>
        </Box>

        <Box
          display={["inherit", "flex"]}
          width="100%"
          justifyContent={["inherit", "flex-end"]}
        >
          <Flex alignItems="center" justifyContent="center">
            {socialLinks.map((socialLink) => (
              <SocialLinkButton {...socialLink} />
            ))}
          </Flex>
        </Box>
      </Box>
      <Box
        paddingX={6}
        display={["flex", "block"]}
        width={["100%", "50%"]}
        paddingY={4}
        justifyContent="center"
      >
        <Text fontSize="xs">2020 - Agustinus Nathaniel</Text>
      </Box>
    </Box>
  );
};

export default Foot;
