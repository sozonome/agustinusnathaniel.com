import { Button, IconButton } from "@chakra-ui/button";
import { useColorMode } from "@chakra-ui/color-mode";
import { useDisclosure } from "@chakra-ui/hooks";
import { Flex, Text, Link as ChakraLink, Box, Grid } from "@chakra-ui/layout";
import { useMediaQuery } from "@chakra-ui/media-query";
import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
} from "@chakra-ui/modal";
import { Link } from "gatsby";
import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";

const Nav = () => {
  const { colorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const hoverColor = colorMode === "light" ? "orange.300" : "white";
  const [isMobile] = useMediaQuery("(max-width: 30em)");

  const NavList = () => {
    return (
      <>
        <Link to="/blog">
          <Text _hover={{ color: hoverColor }}>Blog</Text>
        </Link>
        <Link to="/about">
          <Text _hover={{ color: hoverColor }}>About</Text>
        </Link>
        <ChakraLink
          href={
            "mailto:hello@agustinusnathaniel.com?subject=Let%27s%20Work%20Together&cc=agustinusnathaniel228@gmail.com"
          }
          _hover={{ color: hoverColor }}
          isExternal
        >
          Contact
        </ChakraLink>
      </>
    );
  };

  const MobileNav = () => {
    return (
      <Box>
        <IconButton
          onClick={onOpen}
          aria-label="nav"
          icon={<GiHamburgerMenu />}
        />

        <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
          <DrawerOverlay>
            <DrawerContent>
              <DrawerCloseButton />

              <DrawerHeader>hello</DrawerHeader>

              <DrawerBody>
                <Grid gap={4}>
                  <NavList />
                </Grid>
              </DrawerBody>

              <DrawerFooter>
                <Button onClick={onClose}>Close</Button>
              </DrawerFooter>
            </DrawerContent>
          </DrawerOverlay>
        </Drawer>
      </Box>
    );
  };

  return isMobile ? (
    <MobileNav />
  ) : (
    <Flex gridGap={4}>
      <NavList />
    </Flex>
  );
};

export default Nav;
