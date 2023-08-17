"use client";
import { Box } from "@chakra-ui/react";
import React from "react";
import { Header } from "../../templates/home/Header";
import { Body } from "../../templates/home/Body";

export const Content = () => {
  return (
    <Box bgColor="color.black">
      <Header />
      <Body />
    </Box>
  );
};
