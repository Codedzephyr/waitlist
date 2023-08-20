"use client";
import { Box } from "@chakra-ui/react";
import React from "react";
import { Header } from "../../templates/home/Header";
import { Body } from "../../templates/home/Body";

export const Content = () => {
  return (
    <Box bgColor="rgba(0, 0, 0, 1)">
      <Header />
      <Body />
    </Box>
  );
};
