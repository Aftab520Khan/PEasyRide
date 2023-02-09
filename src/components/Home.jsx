import {
  Box,
  Card,
  Container,
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
  InputRightElement,
  Tabs,
  Tab,
} from "@chakra-ui/react";
import React from "react";
import { MdPlace } from "react-icons/md";
import { BiCar } from "react-icons/bi";
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
import TypewriterComponent from "typewriter-effect";
import { useFormik } from "formik";
import { registration } from "./validation";
import { GetPrice } from "./GetPrice";
import { BookRepairFault } from "./BookRepairFault";

const initialValues = { zipcode: "", rnumber: "" };

export const Home = () => {
  const { values, errors, handleChange, touched, handleBlur, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: registration,
      onSubmit: (values, action) => {
        console.log(values);
        action.resetForm();
      },
    });
  return (
    <Box>
      <HStack>
        <MyCorousel />
        <VStack>
          <Heading>AutoCare</Heading>

          <Heading size={20}>
            <AutoType />
          </Heading>

          <VStack p={"10"}>
            <Card width="sm" bgColor="gray.200" p={10} filter="blur">
              <CardHeader align="center">
                <Heading borderBottom="2px solid darkgreen">REGISTER</Heading>
              </CardHeader>
              <CardBody>
                <form onSubmit={handleSubmit}>
                  <FormControl paddingBottom={50}>
                    <InputGroup border="2px solid darkgreen" borderRadius={8}>
                      <InputLeftElement children={<MdPlace />} />
                      <Input
                        type={"number"}
                        name="zipcode"
                        value={values.zipcode}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="Enter Pincode"
                      />
                      <InputRightElement children={<Tabs mr='20' size='sm' variant={'soft-rounded'} colorScheme={'green'}><Tab> location</Tab></Tabs>}/>
                    </InputGroup>
                    <Text>
                      {errors.zipcode && touched.zipcode ? (
                        <Text color="red">{errors.zipcode}</Text>
                      ) : null}
                    </Text>
                    <br />
                    <InputGroup border="2px solid darkgreen" borderRadius={8}>
                      <InputLeftElement children={<BiCar />} />
                      <Input
                        type={"text"}
                        name="rnumber"
                        value={values.rnumber}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="Your registration number"
                      />
                    </InputGroup>
                    <Text>
                      {errors.rnumber && touched.rnumber ? (
                        <Text color="red">{errors.rnumber}</Text>
                      ) : null}
                    </Text>
                  </FormControl>
                  <Button mx={"30%"} colorScheme={"green"} type="submit">
                    Register
                  </Button>  
                </form>
              </CardBody>
            </Card>
          </VStack>
        </VStack>
      </HStack>

      <Box align="center" my="28">
        <Heading>Book a mechanic in few click </Heading>
        <HStack pt="20" spacing={10} mx={[0, "18vw"]} wrap="wrap">
          <Box w={["fit-content", "18vw"]}>
            <Img src={rb} w="50%" />
            <Heading size={18}>Choose your repairs</Heading>
            <Text fontSize={14}>
              Select your car, tell us what's wrong, and we'll find the right
              mechanic for you.
            </Text>
          </Box>

          <Box w={["fit-content", "18vw"]}>
            <Img src={b} w="50%" />
            <Heading size={18}>Pick a date , time & location</Heading>
            <Text fontSize={14}>
              Mechanic will come to whichever address suits you best,at the date
              & time of your choice.
            </Text>
          </Box>

          <Box w={["fit-content", "18vw"]}>
            <Img src={s} w="50%" />
            <Heading size={18}>Sit back and relax!</Heading>
            <Text fontSize={14}>
              No need to go to the garage just sit back,grab a drink,and enjoy
              your favourite show.
            </Text>
          </Box>
        </HStack>
        <Button mt="32" right={18} colorScheme={"green"}>
          Frequently asked question
        </Button>
      </Box>

      <Container minH={"20vh"} maxW="container.xl" my={20}>
        <Box id="service">
          <Heading align="center">Our Services</Heading>
          <Service />
        </Box>
        <Box id="mechanic">
          <Mechanic />
        </Box>
        <Box my='10'>
          <GetPrice />
        </Box>
        <Box my='40'>
          <BookRepairFault />
        </Box>
      </Container>
    </Box>
  );
};

export const AutoType = () => {
  return (
    <>
      <TypewriterComponent
        options={{
          strings: [
            "A car is not only a vehicle, sometimes it’s just like a dream.",
            "We Repair Your Dreams.",
            "Drive your car at full speed, but after getting serviced.",
          ],
          delay: 30,
          deleteSpeed: 20,
          typeSpeed: 5,
          loop: true,
          autoStart: true,
        }}
      />
    </>
  );
};

export const MyCorousel = () => (
  <Carousel
    autoPlay
    interval={1500}
    showStatus={false}
    showArrows={false}
    showThumbs={false}
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
