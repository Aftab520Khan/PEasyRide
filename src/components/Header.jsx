import { Button , color, HStack } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'


export const Header = () => {
 
  return ( <>
    <HStack p='8' shadow={'base'} bgColor='blackAlpha.900' >
 <Button variant={'unstyled'} color='white'> 
    <Link to={'/'}>Home</Link>
 </Button>

 <Button variant={'unstyled'} color='white'> 
    <Link to={'/service'}>Services</Link>
 </Button>

 <Button variant={'unstyled'} color='white'> 
    <Link to={'/mechanic'}>Apply to Mechanice</Link>
 </Button>

 <Button  color='black' bgColor={'green.400'} > 
    <Link to={'/login'}>Login</Link>
 </Button>
    </HStack>
  


  </>
  )}
