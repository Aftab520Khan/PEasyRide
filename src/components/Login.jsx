import { Text,Button, Container, Heading, Input, VStack } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

export const Login = () => {
  return (
    <>
    <Container maxW='container.xl' h='100vh' p='16' >
<form>
  <VStack
  alignItems={'stretch'}
  spacing='8'
  w={['full','96']}
  m='auto'
  my={'16'}
  >
<Heading>Welcome Back !</Heading>
<Input placeholder='Email' type={'email'} required focusBorderColor='darkgreen'/>
<Input placeholder='Password' type={'passward'} required focusBorderColor='darkgreen'/>

<Button variant={'link'} colorScheme='green' alignSelf='flex-end'>
  <Link to={'/forgetpassword'}>Forget Password</Link>
</Button>

<Button  colorScheme='green' type='submit'>
Login
</Button>

<Text textAlign={'right'} >New User?
<Button variant={'link'} colorScheme='green' >
  <Link to={'/signup'}>Sign Up</Link>
</Button></Text>
  </VStack>
</form>
    </Container>
    
    </>
  )
}
