import { Box, Text, Flex } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";

const details = [
  {
    image: "/icons/checkmark.svg",
    title: "Enter first feature here",
    description:
      "Lorem ipsum dolor sit amet consectetur. Id molestie vel enim morbi amet eget. ",
  },
  {
    image: "/icons/checkmark.svg",
    title: "Enter first feature here",
    description:
      "Lorem ipsum dolor sit amet consectetur. Id molestie vel enim morbi amet eget. ",
  },
  {
    image: "/icons/checkmark.svg",
    title: "Enter first feature here",
    description:
      "Lorem ipsum dolor sit amet consectetur. Id molestie vel enim morbi amet eget. ",
  },
  {
    image: "/icons/checkmark.svg",
    title: "Enter first feature here",
    description:
      "Lorem ipsum dolor sit amet consectetur. Id molestie vel enim morbi amet eget. ",
  },
  {
    image: "/icons/checkmark.svg",
    title: "Enter first feature here",
    description:
      "Lorem ipsum dolor sit amet consectetur. Id molestie vel enim morbi amet eget. ",
  },
];

export const Individual = () => {
  return (
    <Box mt="3.2rem">
      <Text
        maxW="44rem"
        textAlign={{ base: "center", md: "left" }}
        fontSize="3.2rem"
        fontWeight="700"
        mb="4rem"
        color="#fff"
      >
        Decentralized all-in-one copy will be changed
      </Text>
      {details.map((d, i) => {
        return (
          <Feature
            image={d.image}
            key = {i}
            title={d.title}
            description={d.description}
          />
        );
      })}
    </Box>
  );
};

type Props = {
  image: string;
  title: string;
  description: string;
};

const Feature = ({ image, title, description }: Props) => {
  return (
    <Flex gap="2.4rem" mb="3.2rem">
      <Image src={`${image}`} alt="image" width = {40} height = {40} />
      <Box>
        <Text color="#fff" fontSize="1.6rem" fontWeight="600" mb="0.8rem">
          {title}
        </Text>
        <Text
          maxW="32.4rem"
          color="rgba(255, 255, 255, 0.80)"
          fontSize="1.4rem"
          fontWeight="500"
        >
          {description}
        </Text>
      </Box>
    </Flex>
  );
};
