import { Box, Container } from "@chakra-ui/react";
import React from "react";
import { Decentralized } from "./Decentralized";

export const Body = () => {
  return (
    <Box
      bgImage="url('/images/background.png')"
      bgPosition="center"
      bgSize="cover"
      bgRepeat="no-repeat"
    >
      <Container maxW="120rem" mx="auto" display="flex">
        <Decentralized />
      </Container>
    </Box>
  );
};
