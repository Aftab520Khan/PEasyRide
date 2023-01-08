import { Box, Button, ButtonGroup, HStack, Image } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import logo from "../assets/logo.svg";

export const Header = () => {
  return (
    <>
      <Box zIndex={"sticky"}>
        <HStack
          p="8"
          shadow={"base"}
          bgColor="blackAlpha.900"
          w={"100vw"}
          h="13vh"
        >
          <Image w={["80px", "100px"]} src={logo} marginRight="10" />
          <ButtonGroup spacing="10">
            <Button variant={"unstyled"} color="white">
              <Link to={"/"}>Home</Link>
            </Button>

            <Button variant={"unstyled"} color="white">
              <HashLink to="/#service">Service</HashLink>
            </Button>

            <Button variant={"unstyled"} color="white">
              <HashLink to={"/#mechanic"}>Apply to be a Mechanice</HashLink>
            </Button>
          </ButtonGroup>

          <HStack pos="absolute" right="20">
            <Button colorScheme="green" variant={"outline"} size={"md"}>
              <Link to={"/login"}>Login</Link>
            </Button>
          </HStack>
        </HStack>
      </Box>
    </>
  );
};
