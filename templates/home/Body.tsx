import { Box, Container } from "@chakra-ui/react";
import React from "react";
import { Decentralized } from "./Decentralized";
import { SignUp } from "./SignUp";

export const Body = () => {
  return (
    <Box
      bgImage="url('/images/background.svg')"
      bgPosition="center"
      bgSize="cover"
      bgRepeat="no-repeat"
    >
      <Container
        maxW="120rem"
        mx="auto"
        display="flex"
        flexDirection={{ base: "column", md: "row" }}
        pt="5rem"
      >
        <Decentralized />
        <SignUp />
      </Container>
    </Box>
  );
};
