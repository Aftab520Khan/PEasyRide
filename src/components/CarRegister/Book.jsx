// Step four
import { Heading, VStack } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'


export const Book = () => {
  return (
    <>
    
    <VStack>
    
     <Heading>AutoCare</Heading>
     <Link to={'/payment'}>Payment</Link>
    </VStack>
    </>
  )
}
