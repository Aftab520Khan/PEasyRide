import {
  Box,
  Card,
  Container,
  CardFooter,
  Button,
  CardBody,
  Heading,
  HStack,
  Text,
  Img,
  Input,
  VStack,
  FormControl,
  CardHeader,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import React from "react";
import {  MdPlace } from "react-icons/md";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from "../assets/repair1.webp";
import img2 from "../assets/repair2.jpg";
import img3 from "../assets/repair3.webp";
import rb from "../assets/rb.png";
import s from "../assets/s.png";
import b from "../assets/b.png";
import { Mechanic } from "./Mechanic";
import { Service } from "./Service";

export const Home = () => {
  return (
    <Box>
      <HStack>
        <MyCorousel />
        <VStack p={"10"}>
          <Card width="sm" bgColor="gray.200" p={10} filter="blur">
            <CardHeader align="center">
              <Heading borderBottom="2px solid darkgreen">REGISTER</Heading>
            </CardHeader>
            <CardBody>
              <FormControl paddingBottom={50}>
                <InputGroup border="2px solid darkgreen" borderRadius={8}>
                  <InputLeftElement children={<MdPlace />} />
                  <Input type={"number"} placeholder="Enter Zipcode" />
                </InputGroup>
                <br />
                <InputGroup border="2px solid darkgreen" borderRadius={8}>
                  <InputLeftElement children={<MdPlace />} />
                  <Input type={"text"} placeholder="Your registration number" />
                </InputGroup>
              </FormControl>
              <Button mx={'30%'} colorScheme={"green"} >Register</Button>
            </CardBody>
            <CardFooter >

              
            </CardFooter>
          </Card>
        </VStack>
      </HStack>

      <Box align='center' my='28' >
        <Heading>Book a mechanic in few click </Heading>
        <HStack pt='20' spacing={'180'} mx={'20vw'} wrap='wrap'>

          <VStack w='12vw' >
            <Img src={rb} />
            <Heading size={18}>Choose your repairs</Heading>
            <Text >Select your car, tell us what's wrong, and we'll find the right mechanic for you.</Text>
          </VStack>

          <VStack w='12vw'>
            <Img src={b}/>
            <Heading size={18}>Pick a date , time & location</Heading>
            <Text>Mechanic will come to whichever address suits you best,at the date & time of your choice.</Text>
          </VStack>

          <VStack w='12vw'>
            <Img src={s}/>
            <Heading size={18}>Sit back and relax!</Heading>
            <Text>No need to go to the garage just sit back,grab a drink,and enjoy your favourite show.</Text>
          </VStack>
        </HStack>
        <Button mt='32' right={18} colorScheme={'green'}>Frequently asked question</Button>
      </Box>


      <Container minH={"150vh"} maxW="container.xl" my={20}>
       <Box id='service'>
        <Heading align='center'>Our Services</Heading>
        <Service/>
       </Box>
        <Box id="mechanic">
          <Mechanic/>
        </Box>
      </Container>
    </Box>
  );
};



 export const MyCorousel = () => (
  <Carousel
    autoPlay
    interval={1500}
    showStatus={false}
    showArrows={false}
    showThumbs={true}
    infiniteLoop
  >
    <Box w={"full"} h={["md", "2xl"]}>
      <Img src={img2} h={"full"} objectFit="cover" />
    </Box>

    <Box w={"full"} h={["md", "2xl"]}>
      <Img src={img1} h={"full"} objectFit="cover" />
    </Box>

    <Box w={"full"} h={["md", "2xl"]}>
      <Img src={img3} h={"full"} objectFit="cover" />
    </Box>
  </Carousel>
);
