import { Box, Button, HStack, Stack, VStack ,Heading, Input,Text} from '@chakra-ui/react'
import React from 'react'
import {AiOutlineSend} from 'react-icons/ai'
export const Footer = () => {
  return (
   
    <Box bgColor={'blackAlpha.900'} minH={'40'} p="16" color={'white'}>
    <Stack direction={['column','row']}>
        <VStack alignItems={'stretch'} w='full' px={'4'}>
            <Heading size='md' textTransform={'uppercase'} textAlign='center'>
                Subscribe to get update
            </Heading>
            <HStack
            borderBottom={'2px solid white'} 
            py='2'
            >
                <Input placeholder='Enter Email Here....'
                borderRadius={'none'}
                outline={'none'}
                focusBorderColor='none'
                border={'none'}/>
                <Button 
                padding={'0'}
                colorScheme='green'
                variant={'ghost'}
                borderRadius='0 20px 20px 0'
                >
                    <AiOutlineSend size={20}/>
                </Button>
            </HStack>
        </VStack>

        <VStack w={'full'} borderLeft={['none','1px solid white']} borderRight={['none','1px solid white']}>
<Heading size={'md'} textTransform='uppercase' textAlign={'center'}>
    Video Hub
</Heading><Text>All right received</Text>
        </VStack>
        <VStack w={'full'} >
<Heading size={'md'} textTransform='uppercase' textAlign={'center'}>
    Social Media
</Heading>
<Button colorScheme={'whiteAlpha'} variant='link'> Youtube</Button>
<Button colorScheme={'whiteAlpha'} variant='link'> GitHub</Button>
<Button colorScheme={'whiteAlpha'} variant='link'> Instagram</Button>
        </VStack>

    </Stack>        
    </Box>
  )
}
