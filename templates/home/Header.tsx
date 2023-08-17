import { Box, Center, Image } from "@chakra-ui/react";
import React from "react";

export const Header = () => {
  return (
    <Box>
      <Center>
        <Image
          src="/icons/logo.svg"
          alt="logo"
          width="121px"
          height="41px"
          my="2.55rem"
        />
      </Center>
    </Box>
  );
};
