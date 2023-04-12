import { Box, Button, Stack, VStack, Heading, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <>
      <Box
        bgColor={"blackAlpha.900"}
        minH={"40"}
         p="2"
        color={"white"}
        w={["", "100%"]}
      >
        <Stack direction={["column", "row"]}>
          <VStack p="4" alignItems={"stretch"} w="full" px={"4"}>
            <Heading
              pb="10"
              size="md"
              textTransform={"uppercase"}
              textAlign="center"
            > <Link align="center" to="/contact">
              Contact us
              </Link>
              </Heading>
           
              <Text>
                AutoCare opposite Nirmal lifestyle  Sonapur Bhandup West
              </Text>
            
          </VStack>
          <VStack
            p="4"
            spacing={["2", "10"]}
            w={"full"}
            borderLeft={["none", "1px solid white"]}
            borderRight={["none", "1px solid white"]}
          >
            <Heading size={"md"} textTransform="uppercase" textAlign={"center"}>
              AutoCare
            </Heading>
            <Text align="center">© 2023 All rights reserved</Text>
          </VStack>
          <VStack p="4" w={"full"}>
            <Heading size={"md"} textTransform="uppercase" textAlign={"center"}>
              Social Media
            </Heading>

            <Button colorScheme={"whiteAlpha"} variant="link">
              <a href="https://youtube.com/watch?v=7dXBN8a-X2U&si=EnSIkaIECMiOmarE">
                Youtube
              </a>
            </Button>
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
