import { Stack,Heading, HStack ,Text, Img, Button } from '@chakra-ui/react'
import React from 'react'
import img3 from "../assets/repair3.webp";

export const Mechanic = () => {
  return (
    <Stack my='16'>
        
        <HStack>
          <Text p='16' >
          <Heading pb='8'>Apply to be a Mechanic</Heading>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit laborum, recusandae ut tempora veritatis explicabo possimus amet provident nisi, atque eaque quae voluptatibus quo quod exercitationem doloribus distinctio sit doloremque.
           <br/><br/>
            <Button mt='8'   colorScheme={'green'}>Apply</Button>
          </Text>
          <Img src={img3}/>
          
        </HStack>
    </Stack>
  )
}
