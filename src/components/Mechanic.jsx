import {
  Stack,
  Heading,
  HStack,
  Text,
  Img,
  Button,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import img3 from "../assets/repair3.webp";

export const Mechanic = () => {
  return (
    <Stack pt={"10vh"}>
      <HStack>
        <VStack p={["2", "10"]}>
          <Heading pb="4" fontSize={["18", "4xl"]} alignSelf="flex-start">
            Apply to be a Mechanic
          </Heading>
          <Text fontSize={["12", "xl"]}>
            AutoCare as a mechanic and accept the work you want. Free to join
            with great perks and discounts.
            <br />
            <br />
            <Button colorScheme={"green"} size={["sm", "lg"]}>
              Apply
            </Button>
          </Text>
        </VStack>
        <Img src={img3} />
      </HStack>
    </Stack>
  );
};
