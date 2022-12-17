import { Box, Container, Heading,Img, Stack,Text } from '@chakra-ui/react'
import React from 'react'
import {Carousel} from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import img1 from '../assets/repair1.webp'
import img2 from '../assets/repair2.jpg'
import img3 from '../assets/repair3.webp'

const headingOption ={
  pos:'absolute',
  left:'50%',
  top:'50%',
  Transform:'translate(-50%,-50%)',
  textTransform:'uppercase',
  p:'4'
}



export const Home = () => {
  return (
    <Box>
      <MyCorousel/>
      <Container minH={'100vh'} maxW='container.xl' p='16' >
      <Heading textTransform={'uppercase'} py='2'  borderBottom={'2px solid'} textAlign='center'>Services</Heading>
      <Stack 
      height={'full'} p='4' alignItems='center' direction={['column','row']}
      >
        <Img src={img1} />
        <Text letterSpacing='widest' lineHeight={'190%'} p={['4','16']} textAlign='center'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio sit corporis dolorum sint fuga error placeat autem saepe repellat porro nihil perspiciatis doloribus eaque, similique deserunt quis repellendus recusandae quaerat?

        </Text>

      </Stack>
      
      </Container>
    </Box>
  )
}
const MyCorousel=()=> (
<Carousel  autoPlay interval={1500} showStatus={false}  showArrows={false} showThumbs={true} infiniteLoop>
<Box w={'full'} h={'100vh'}>
  <Img src={img2}/>
  <Heading bgColor={'blackAlpha.600'} color={'white'} {...headingOption}>
    Watch the Future
  </Heading></Box>

  <Box w={'full'} h={'100vh'}>
  <Img src={img1}/>
  <Heading bgColor={'blackAlpha.600'} color={'white'} {...headingOption}>
    Watch the Future
  </Heading></Box>

  <Box w={'full'} h={'100vh'}>
  <Img src={img3}/>
  <Heading bgColor={'blackAlpha.600'} color={'white'} {...headingOption}>
    Watch the Future
  </Heading></Box>

  
</Carousel>
)