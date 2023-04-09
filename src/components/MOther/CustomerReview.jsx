import { Button, Card,Img,Text, CardBody, HStack,CardFooter, Divider, Heading, Stack, 
} from '@chakra-ui/react'
import React from 'react'
import user1 from './../../assets/user1.jfif'
import user2 from './../../assets/user2.jfif'
import user3 from './../../assets/user3.jfif'


export const CustomerReview = () => {
  return (
    <>
    <Stack    >
    <Heading p='10'align={'center'}> What our customer say? </Heading>
    <HStack wrap={'wrap'}  gap='10' >
        
        
            
    <Card  align={'end'} color='white' bg={('purple.900')} >
        <CardBody   align={'center' }>
            <Img src={user1} objectFit='cover'  />
            <Stack pt='5'>
            <Heading>Herry</Heading>
            <Text>Lorem  qui? Perspiciatis?</Text>
            </Stack>
        </CardBody>
        <Divider/>
        <CardFooter>
            <Button variant={'link'} pr='2'>Read more</Button>
            
            
        </CardFooter>
    </Card>
    

    <Card  align={'end'} color='white' bg='red.900' >
        <CardBody  align={'center' } >
            <Img src={user3} />
            <Stack pt='5'>
            <Heading>Chor Sin</Heading>
            <Text>Lorem  qui? Perspiciatis?</Text>
            </Stack>
        </CardBody>
        <Divider/>
        <CardFooter>
            <Button variant={'link'} pr='2'>
              Read more  
            </Button>
        </CardFooter>
    </Card>


    <Card  align={'end'} color='white' bgColor='blackAlpha.900' >
        <CardBody align='center' >
            <Img src={user2} />
            <Stack pt='5'>
            <Heading>Mon Che</Heading>
            <Text>Lorem  qui? Perspiciatis?</Text>
            </Stack>
        </CardBody>
        <Divider/>
        <CardFooter>
            <Button variant={'link'} pr='2'>
                Read more
            </Button>
        </CardFooter>
    </Card>

    
    </HStack>
    </Stack>
    </> 
  )
}
