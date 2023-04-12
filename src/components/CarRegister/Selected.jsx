// Step two 
import { Heading, Stack, StackDivider } from "@chakra-ui/react";
import React from "react";
import { Service } from "../MOther/Service";
import { Details } from "./Details";

export const Selected = () => {
  return (
    <>
    <Stack p={'10'} h='auto' height='80vh'>
      <Heading align="center">
        Ah!we see you've got a {}.
        <br /> <StackDivider/>
        How can we help you ?
      </Heading>
      <Service  />
      <Details/>
      </Stack>
    </>
  );
};
