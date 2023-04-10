import React from 'react'
import {Card,Text,Button, CardBody, CardHeader, Heading, Stack, HStack, CardFooter, } from '@chakra-ui/react'

export const PPI = () => {
  return (
    <Stack m='10' h='auto'  pt='10' pb='10'>
      <HStack spacing={4} gap='3' wrap={'Wrap'}>
    <Card shadow={'2xl'} w={'30vw'} h='55vh'>
      <CardHeader>
       <Heading>BASIC</Heading>
      </CardHeader>
      <CardBody>
        <Heading size={'md'} color='green'>
        From  ₹4,999/-
        </Heading>
       
       <Text>
       <li>
          72-point mechanical and structural inspection
        </li>
        <li>
          Road test
        </li>
        <li>
          Vehicle report emailed to you
        </li>
        </Text> 
      </CardBody>
      <CardFooter>
        <Button colorScheme={'green'} >
          Book Basic Inspection
        </Button>
      </CardFooter>
    </Card>


    <Card shadow={'2xl'} border='2px solid darkgreen'  h='55vh' w='30vw'>
      <CardHeader>
       <Heading>STANDARD</Heading>
      </CardHeader>
      <CardBody>
        <Heading size={'md'} color='green'>
        From  ₹19,999/-
        </Heading>
       
       <Text>
       <li>
         105-point mechanical and structural inspection
        </li>
        <li>
          Road test
        </li>
        <li>
          Vehicle report emailed to you
        </li>
        <li>
          Bodywork inspection
        </li>
        <li>
          Free phone consultation with the mechanic afterwards
        </li>
        </Text> 
      </CardBody>
      <CardFooter>
        <Button colorScheme={'green'} >
          Book Standard Inspection
        </Button>
      </CardFooter>
    </Card>

    <Card shadow={'2xl'} h='70vh' w='30vw'>
      <CardHeader>
       <Heading>PREMIUM</Heading>
      </CardHeader>
      <CardBody>
        <Heading size={'md'} color='green'>
        From  ₹49,999/-
        </Heading>
       
       <Text>
       <li>
          143-point mechanical and structural  inspection
        </li>
        <li>
          Road test
        </li>
        <li>
          Vehicle report emailed to you
        </li>
        <li>
          Full interior,bodywork and paint inspection
        </li>
        <li>Free phone consultation with the mechanic afterwards</li>
        <li>Vehicle raised to conduct more thorough inspection</li>
        <li> Plug-in diagnostic check</li>
        <li> Photos included in the report</li>
        </Text> 
      </CardBody>
      <CardFooter>
        <Button colorScheme={'green'} >
          Book Premium Inspection
        </Button>
      </CardFooter>
    </Card>
    </HStack>
    </Stack>
  )
}
