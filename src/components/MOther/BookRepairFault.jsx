import {
  Button,
  Heading,
  HStack,
  Stack,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  VStack,
} from "@chakra-ui/react";
import React from "react";

export const BookRepairFault = () => {
  return (
    <>
      <Stack align="center" m="2"  >
        <Heading pb="10" size={"lg"}>
          Book Repair of fault makes in this house
        </Heading>
        <Tabs variant={"enclosed"} colorScheme="green">
          <TabList>
            <Tab>Top makes</Tab>
            <Tab>Top location</Tab>

            <Tab>Top categories</Tab>
          </TabList>

          <TabPanels>
            {/*  Top maker  */}
            <TabPanel>
              <VStack spacing={10}>
                <HStack spacing={10}>
                  <Button variant={"unstyled"}>Maruti Suzuki</Button>
                  <Button variant={"unstyled"}>Wagon</Button>
                  <Button variant={"unstyled"}>Honda</Button>
                </HStack>
                <HStack spacing={10}>
                  <Button variant={"unstyled"}>Skoda</Button>
                  <Button variant={"unstyled"}>Brezza</Button>
                  <Button variant={"unstyled"}>TOYOTA</Button>
                </HStack>
              </VStack>
            </TabPanel>
            {/*  Top location  */}
            <TabPanel>
              <HStack spacing={20}>
                <Button variant={"unstyled"} color="green">
                  Mulund
                </Button>
                <Button variant={"unstyled"}>Bhandup</Button>
               
              </HStack>
            </TabPanel>

            {/*  Top categories  */}
            <TabPanel>
              <HStack spacing={['2','20']}>
                
                 <VStack >
                    <Button variant={"unstyled"}>Body Repairs</Button>
                    <Button variant={"unstyled"}>Brakes</Button>  
                    <Button variant={"unstyled"}>Cooling System</Button>
                    </VStack>

                   <VStack >
                    <Button variant={"unstyled"}>Clutch</Button>
                    <Button variant={"unstyled"}>
                      Heating and Air Condition
                    </Button>
                    <Button variant={"unstyled"}>
                      Pre-Purchase Inspections
                    </Button>
                    </VStack>

                   
                   
                    

              </HStack>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Stack>
    </>
  );
};
