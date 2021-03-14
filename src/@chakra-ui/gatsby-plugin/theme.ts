import { theme as ChakraTheme, extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  fonts: {
    ...ChakraTheme.fonts,
    heading: "Open Sans, serif",
    body: "Recursive, sans-serif",
  },
  components: {
    Text: {
      baseStyle: {
        transition: "0.4s ease",
      },
      _hover: {
        transition: "0.2s ease",
      },
    },
    Heading: {
      baseStyle: {
        transition: "0.4s ease",
      },
      _hover: {
        transition: "0.2s ease",
      },
    },
    Button: {
      baseStyle: {
        borderRadius: 24,
      },
    },
  },
  config: {
    initialColorMode: "dark",
  },
});

export default theme;
