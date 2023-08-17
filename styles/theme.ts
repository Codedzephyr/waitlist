import { extendTheme } from "@chakra-ui/react";

const styles = {
  global: {
    html: {
      fontSize: "10px",
    },
    body: {
      fontSize: "1.4rem",
      "&::-webkit-scrollbar": {
        display: "none",
      },
    },
  },
};

const colors = {
  color: {
    black: "#000000",
  },
};

export const theme = extendTheme({ colors, styles });
