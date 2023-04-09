// Step two 
import { Heading, Stack, StackDivider } from "@chakra-ui/react";
import React from "react";
import { Service } from "../MOther/Service";

export const Selected = () => {
  return (
    <>
    <Stack p={'10'} h='auto' height='80vh'>
      <Heading align="center">
        Ah!we see you've got a Honda.
        <br /> <StackDivider/>
        How can we help you ?
      </Heading>
      <Service  />
      </Stack>
    </>
  );
};
