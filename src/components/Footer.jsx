import {
  Box,
  Button,
  HStack,
  Stack,
  VStack,
  Heading,
  Input,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { AiOutlineSend } from "react-icons/ai";

export const Footer = () => {
  return (
    <>
      <Box
        bgColor={"blackAlpha.900"}
        minH={"40"}
        p="16"
        color={"white"}
        w="100vw"
      >
        <Stack direction={["column", "row"]}>
          <VStack alignItems={"stretch"} w="full" px={"4"}>
            <Heading size="md" textTransform={"uppercase"} textAlign="center">
              Contact us
            </Heading>
            <HStack borderBottom={"2px solid white"} py="2">
              <Input
                placeholder="Enter Email Here...."
                borderRadius={"none"}
                outline={"none"}
                focusBorderColor="none"
                border={"none"}
              />
              <Button
                padding={"0"}
                colorScheme="green"
                variant={"ghost"}
                borderRadius="0 20px 20px 0"
              >
                <AiOutlineSend size={20} />
              </Button>
            </HStack>
          </VStack>

          <VStack
            w={"full"}
            borderLeft={["none", "1px solid white"]}
            borderRight={["none", "1px solid white"]}
          >
            <Heading size={"md"} textTransform="uppercase" textAlign={"center"}>
              AutoCare
            </Heading>
            <Text>© 2023 All rights reserved</Text>
          </VStack>
          <VStack w={"full"}>
            <Heading size={"md"} textTransform="uppercase" textAlign={"center"}>
              Social Media
            </Heading>
            <a href="https://youtube.com/watch?v=7dXBN8a-X2U&si=EnSIkaIECMiOmarE">
              <Button colorScheme={"whiteAlpha"} variant="link">
           
                Youtube
              </Button>
            </a>

            <a href="https://github.com/Aftab520Khan/PEasyRide">
            <Button colorScheme={"whiteAlpha"} variant="link">
              GitHub
            </Button>
            </a>
            <a>
            <Button colorScheme={"whiteAlpha"} variant="link">
              Instagram
            </Button>
            </a>
          </VStack>
        </Stack>
      </Box>
    </>
  );
};
