import {
  Box,
  Text,
  Center,
  Image,
  InputGroup,
  InputLeftElement,
  Button,
} from "@chakra-ui/react";
import { Input } from "@chakra-ui/react";
import React from "react";

export const SignUp = () => {
  return (
    <Box flex="1" display="flex" justifyContent="center">
      <Box w={{ base: "100%", md: "40.6rem" }} px="1rem">
        <Center>
          <Text
            fontSize="3.2rem"
            fontWeight="700"
            textAlign="center"
            maxW="40.6rem"
            pt={{ base: "0rem", md: "7rem" }}
            sx={{
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              background:
                "-webkit-linear-gradient(106deg, rgba(118, 118, 118, 0.40) 0%, #FFF 42.21%, rgba(255, 255, 255, 0.40) 100%, #FFF 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextStroke: " transparent",
            }}
          >
            Join the waitlist to get early access
          </Text>
        </Center>
        <Center>
          <Text
            mt="1.6rem"
            color="rgba(255, 255, 255, 0.74)"
            fontSize="1.6rem"
            fontWeight="500"
            maxW="36rem"
            textAlign="center"
          >
            Join our waitlist today to get notified as soon as we launch!
          </Text>
        </Center>
        <Center mt="1.5rem" mb="3rem">
          <Image src="/images/faces.png" alt="faces" />
        </Center>
        <Center mb="1.5rem">
          <InputGroup>
            <InputLeftElement pointerEvents="none" py="2.3rem" mx="1rem">
              <Image src="/icons/user.svg" alt="user" />
            </InputLeftElement>
            <Input
              type="tel"
              placeholder="Tell us your name"
              color="#fff"
              fontSize="1.5rem"
              py="2.3rem"
              pl="4rem"
              border="1px solid rgba(255, 255, 255, 0.10)"
            />
          </InputGroup>
        </Center>
        <Center mb="1.5rem">
          <InputGroup>
            <InputLeftElement pointerEvents="none" py="2.3rem" mx="1rem">
              <Image src="/icons/user.svg" alt="user" />
            </InputLeftElement>
            <Input
              type="tel"
              placeholder="Enter your email address"
              color="#fff"
              fontSize="1.5rem"
              py="2.3rem"
              pl="4rem"
              border="1px solid rgba(255, 255, 255, 0.10)"
            />
          </InputGroup>
        </Center>
        <Button py="2.3rem" display="flex" gap="1rem" bgColor="#fff" w="100%">
          <Text fontSize="1.4rem" color="#000" fontWeight="600">
            Join the waitlist
          </Text>
          <Image src="/icons/right-arrow.svg" alt="arrow" />
        </Button>
        <Text
          fontSize="1.4rem"
          fontWeight="600"
          textAlign="center"
          color="rgba(255, 255, 255, 0.71)"
          my="2rem"
        >
          By joining our waitlist, you are agreeing to our{" "}
          <Text as="span" color="#7557D3">
            {" "}
            Privacy Policy{" "}
          </Text>{" "}
          and
          <Text as="span" color="#7557D3">
            {" "}
            Terms of Use
          </Text>
        </Text>
      </Box>
    </Box>
  );
};
