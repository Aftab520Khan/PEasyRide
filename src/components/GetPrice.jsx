import { Text, Button, Heading, HStack, Stack, VStack } from "@chakra-ui/react";
import React from "react";

export const GetPrice = () => {
  return (
    <>
      <Stack pt={40}>
        <VStack>
          <Heading my="2">Book a mechanic online today</Heading>
          <Text pb="4">
            Book a mechanic to fix your car at your home or office.
          </Text>
          <Button size={"lg"} colorScheme="green">
            Get the instant price
          </Button>
          
            <HStack pt="3" spacing={8}>
              <li>Save up to 20%</li>
              <li>Fast online booking</li>
            </HStack>
          
        </VStack>
      </Stack>
    </>
  );
};
