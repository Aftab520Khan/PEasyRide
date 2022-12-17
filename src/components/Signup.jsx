import React from 'react'
import { Text,Button, Container, Heading, Input, VStack, Avatar } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

export const Signup = () => {
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
<Heading>Video Hub</Heading>
<Avatar alignSelf={'center'} boxSize='32'/>
<Input placeholder='Name' type={'text'} required focusBorderColor='darkgreen'/>
<Input placeholder='Email' type={'email'} required focusBorderColor='darkgreen'/>
<Input placeholder='Password' type={'passward'} required focusBorderColor='darkgreen'/>


<Button  colorScheme='green' type='submit'>
SignUp
</Button>

<Text textAlign={'right'} >Already have an account?
<Button variant={'link'} colorScheme='green' >
  <Link to={'/login'}>Login</Link>
</Button></Text>
  </VStack>
</form>
    </Container>
    
    </>
  )
}
