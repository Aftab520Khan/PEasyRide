import { Box, Card, CardBody, CardHeader, Heading, HStack, Image, Stack,Text, VStack, Wrap } from '@chakra-ui/react'
import React from 'react'
import {GiAutoRepair} from 'react-icons/gi'
import r from '../assets/r.png'
import ci from '../assets/ci.png'
import d from '../assets/d.png'

export const Service = () => {
  return (
    <Stack paddingTop={20}>
        <HStack spacing={10} wrap='wrap'  >
            <VStack p={10} >
            <Card shadow={'2xl'} cursor='pointer'  >
            <Image src={r}/>
            <Heading my='8' align={'center'}>Repairs</Heading>
            </Card>
            </VStack>

            <VStack p={10}>
            <Card shadow={'2xl'} cursor='pointer'>
                <Image src={d}/>
                <Heading my='8'p={10} align={'center'}>Diagnostics</Heading>
            </Card>
            </VStack>

            <VStack p={10}>
            <Card shadow={'2xl'}  cursor='pointer'>
                    <Image  src={ci}   />
                    <Heading my='8' align={'center'}>Pre-purchase <br/>Inspections</Heading>
            </Card>
            </VStack>
        </HStack>

    </Stack>
  )
}
