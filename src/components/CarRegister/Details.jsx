// Step three

import { Box, Stack, VStack } from '@chakra-ui/react'
import React from 'react'
import { Book } from './Book'


export const Details = () => {
  return (
    <div>
        <Stack>
        <Box>
            <VStack>
                <Book/>
                
            </VStack>
        </Box>
        </Stack>
       
    </div>
  )
}








