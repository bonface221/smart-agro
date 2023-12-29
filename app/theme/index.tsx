import { extendTheme } from "@chakra-ui/react";
import { Livvic } from "next/font/google";

const livvic = Livvic({
  weight: ["600", "700"],
  subsets: ["latin-ext"],
});

export const theme = extendTheme({
  components: {
    Heading: {
      baseStyle: {
        fontFamily: livvic.style.fontFamily,
        fontWeight: 700,
      },
    },
    Text: {
      baseStyle: {
        color: "brand.white",
      },
    },
  },
  colors: {
    brand: {
      main: "#F7C35F",
      black: "#1A1A1A",
      white: "#FFFFFF",
      greenBg: "#334B35",
      green: "#263C28",
      lightGreen: "#6D8C54",
    },
  },
});
