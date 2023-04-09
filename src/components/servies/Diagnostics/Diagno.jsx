import React from "react";
import {
  Box,
  Text,
  Heading,
  Stack,
  Table,
  TableContainer,
  Td,
  VStack,
  HStack,
  Button,
} from "@chakra-ui/react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { GrFormNextLink } from "react-icons/gr";
import { useState } from "react";

export const Diagno = () => {
 


  return (
    <>
      <Stack>
        <VStack m={10}>
          <Box align="center" w={"50vw"} mb="10">
            <Heading>IN-PERSON DIAGNOSTIC</Heading>
            <Text>
              Get a mechanic to diagnose the issue and give you a no-obligation
              quote for any required repairs.
            </Text>
          </Box>

          <Box
            w={"70vw"}
            borderBottom={"2px solid green"}
            borderTop={"2px solid green"}
          >
            <HStack m="10">
              <Box>
                <Heading>
                  Diagnostic Inspection
                  <br />
                  <span style={{ fontSize: 25 }}>₹ 499</span>
                </Heading>
                <HStack color={"yellow.400"} mt={2} mb={4} fontSize={28}>
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiOutlineStar />
                </HStack>
                <Text>
                  If you are unsure what the issue is we recommend booking an
                  inspection through AutoCare to find the problem and get your
                  <br /> car going again.
                </Text>
              </Box>
              <Box align="center">
                {
                 
                  <Button left={100} variant={"outline"}  colorScheme="green">
                  Add
                </Button>
                 
                }
              </Box>
            </HStack>
          </Box>

          <Box w={"70vw"} borderBottom={"2px solid green"}>
            <HStack m="10">
              <Box>
                <Heading>
                  Car Won't Start Inspection
                  <br />
                  <span style={{ fontSize: 25 }}>₹ 499</span>
                </Heading>
                <HStack color={"yellow.400"} mt={2} mb={4} fontSize={28}>
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                </HStack>
                <Text>
                  They will use their experience to select the most suitable
                  checks given the vehicle's specific symptoms,
                  <br /> which may include checks on the fuel, ignition,
                  electrical and mechanical components of the engine or its
                  supporting systems.
                </Text>
              </Box>
              <Box align="center">
                <Button left={100} variant={"outline"} colorScheme="green">
                  Add
                </Button>
              </Box>
            </HStack>
          </Box>

          <Box w={"70vw"}  borderBottom={"2px solid green"}>
            <HStack m="10">
              <Box>
                <Heading>
                  Plug-in Diagnostic Inspection
                  <br />
                  <span style={{ fontSize: 25 }}>₹ 499</span>
                </Heading>
                <HStack color={"yellow.400"} mt={2} mb={4} fontSize={28}>
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiOutlineStar />
                  <AiOutlineStar />
                </HStack>
                <Text>
                  They will find 'fault codes' which the car stores when it
                  detects a fault or defect somewhere in the car, however they
                  can often
                  <br /> read other information too.
                </Text>
              </Box>
              <Box align="center" flexWrap={"wrap"}>
                <Button left={100} variant={"outline"} colorScheme="green">
                  Add
                </Button>
              </Box>
            </HStack>
          </Box>
         <Box p={10}>
         <Button 
            pl="10"
            pr="10"
            color={'gray.900'}
            colorScheme={"green"}
          >
            Next
            <GrFormNextLink fontSize={"28"} />
          </Button>
          
          </Box> 
         
         
        </VStack>
      </Stack>
    </>
  );
};
