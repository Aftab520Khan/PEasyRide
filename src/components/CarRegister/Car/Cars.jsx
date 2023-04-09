// Step one 
import {
  FormControl,
  InputGroup,
  Text,
  InputLeftElement,
  Input,
  
  Heading,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  VStack,
  Button,
  Select,
} from "@chakra-ui/react";
import React from "react";




import { NumberCar } from "./NumberCar";
import { DCar } from "./DCar";




export const Cars = () => {
  
    


  return (
    <>
      <VStack h="90vh">
        <Heading p="10">Tell us about your car</Heading>
        <Tabs colorScheme={"green"}>
          <TabList>
            <Tab>USE CAR DETAILS</Tab>
            <Tab>USE NUMBER PLATE</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
             <DCar/>
            </TabPanel>

            <TabPanel>
              <NumberCar/>
                
              
            </TabPanel>
          </TabPanels>
        </Tabs>
      </VStack>
    </>
  );
};
