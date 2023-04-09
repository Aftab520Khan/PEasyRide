import { Text, Button, Heading, HStack, Stack, VStack } from "@chakra-ui/react";
import React from "react";
import {useNavigate} from 'react-router-dom'
export const GetPrice = () => {
  const nav = useNavigate()
  return (
    <>
      <Stack pt={40}>
        <VStack>
          <Heading my="2">Book a mechanic online today</Heading>
          <Text pb="4">
            Book a mechanic to fix your car at your home or office.
          </Text>
          <Button size={"lg"} colorScheme="green" onClick={()=>{nav('/booking')}}>
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
