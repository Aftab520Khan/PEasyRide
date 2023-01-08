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
      <Stack align={"center"} my="20" m="4" p="20">
        <Heading pb="10" size={"lg"}>
          Book Repair of fault makes in this house
        </Heading>
        <Tabs variant={"enclosed"} colorScheme="green">
          <TabList>
            <Tab>Top makes</Tab>
            <Tab>Top location</Tab>
            <Tab>Top jobs</Tab>
            <Tab>Top categories</Tab>
          </TabList>

          <TabPanels>
            {/*  Top maker  */}
            <TabPanel>
              <VStack>
                <HStack spacing={10}>
                  <Button variant={"unstyled"}>Maruti Suzuki</Button>
                  <Button variant={"unstyled"}>Wagon</Button>
                  <Button variant={"unstyled"}>Honda</Button>
                </HStack>
                <HStack spacing={20}>
                  <Button variant={"unstyled"}>Skoda</Button>
                  <Button variant={"unstyled"}>Brezza</Button>
                  <Button variant={"unstyled"}>Bold</Button>
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
                <Button variant={"unstyled"}>Kurla</Button>
                <Button variant={"unstyled"}>Thane</Button>
              </HStack>
            </TabPanel>
            {/*  Top jobs  */}
            <TabPanel>
              <HStack spacing={20}>
                <VStack>
                  <Button variant={"unstyled"} color="green">
                    Mulund
                  </Button>
                  <Button variant={"unstyled"}>Bhandup</Button>
                  <Button variant={"unstyled"}>Kurla</Button>
                  <Button variant={"unstyled"}>Thane</Button>
                </VStack>
                <VStack>
                  <Button variant={"unstyled"} color="green">
                    Mulund
                  </Button>
                  <Button variant={"unstyled"}>Bhandup</Button>
                  <Button variant={"unstyled"}>Kurla</Button>
                  <Button variant={"unstyled"}>Thane</Button>
                </VStack>
              </HStack>
            </TabPanel>

            {/*  Top categories  */}
            <TabPanel>
              <HStack spacing={20}>
                <VStack>
                  <Button variant={"unstyled"} color="green">
                    Mulund
                  </Button>
                  <Button variant={"unstyled"}>Bhandup</Button>
                  <Button variant={"unstyled"}>Kurla</Button>
                  <Button variant={"unstyled"}>Thane</Button>
                </VStack>
                <VStack>
                  <Button variant={"unstyled"} color="green">
                    Mulund
                  </Button>
                  <Button variant={"unstyled"}>Bhandup</Button>
                  <Button variant={"unstyled"}>Kurla</Button>
                  <Button variant={"unstyled"}>Thane</Button>
                </VStack>
              </HStack>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Stack>
    </>
  );
};
