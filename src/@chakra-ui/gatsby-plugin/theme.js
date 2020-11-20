import { theme as ChakraTheme, extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  ...ChakraTheme,
  fonts: {
    ...ChakraTheme.fonts,
    heading: "Open Sans, serif",
    body: "Recursive, sans-serif",
  },
});

export default theme;
