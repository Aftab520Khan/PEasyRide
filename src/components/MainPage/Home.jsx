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
import React, { useState, useEffect } from "react";
import { MdPlace } from "react-icons/md";
import { BiCar } from "react-icons/bi";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from "./../../assets/repair1.webp";
import img2 from "./../../assets/repair2.jpg";
import img3 from "./../../assets/repair3.webp";
import rb from "./../../assets/rb.png";
import s from "./../../assets/s.png";
import b from "./../../assets/b.png";
import { Mechanic } from "../Mechanic/Mechanic";
import { Service } from "../MOther/Service";
import TypewriterComponent from "typewriter-effect";
import { useFormik } from "formik";
import { registration } from "../validation";
import { GetPrice } from "../MOther/GetPrice";
import { BookRepairFault } from "../MOther/BookRepairFault";
import { CustomerReview } from "../MOther/CustomerReview";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const initialValues = { zipcode: "", rnumber: "" };

export const Home = () => {
  const nav = useNavigate();
  const [widths, setwidths] = useState({});

  

  useEffect(() => {
    function resize() {
      if (window.innerWidth <= 750) {
        setwidths(true);
      } else {
        setwidths(false);
      }
    }
    resize();
   
  }, []);

  const { values, errors, handleChange, touched, handleBlur, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: registration,
      onSubmit: (values, action) => {
        console.log(values);
        nav("/booking/car/se");
        action.resetForm();
      },
    });
  return (
    <Box>
      <HStack>
        {widths ? null : <MyCorousel />}
        <VStack>
          <Heading>AutoCare</Heading>
          <Heading size={20}>
            <AutoType />
          </Heading>

          <VStack p={["2", "10"]}>
            <Card w={["auto", "sm"]} bgColor="gray.200" p={10} filter="blur">
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
                    </InputGroup>

                    <Text color="red">
                      {errors.zipcode && touched.zipcode ? (
                        <>{errors.zipcode}</>
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
                    <Text color="red">
                      {errors.rnumber && touched.rnumber ? (
                        <>{errors.rnumber}</>
                      ) : null}
                    </Text>
                    <Button colorScheme={"green"} mt="5" variant={"link"}>
                      <Link to={"/booking/car"}>
                        I don't know my register number
                      </Link>
                    </Button>
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

      <Box align="center" my="20">
        <Heading>Book a mechanic in few click </Heading>
        <HStack pt="20" spacing={10} mx={[0, "18vw"]} wrap={["wrap", ""]}>
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
        <Button mt="10" colorScheme={"green"}>
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

        <Box>
          <CustomerReview />
        </Box>

        <Box my="10">
          <GetPrice />
        </Box>
        <Box my="40">
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
            "A car is not only a vehicle,<br/> sometimes <br/>it's just like a dream.",
            "We Repair Your Dreams.",
            "Drive your car at full speed,<br/> but after getting<br/> serviced.",
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
    <Box w={["", "full"]} h={["md", "2xl"]}>
      <Img src={img2} h={"full"} objectFit="cover" />
    </Box>

    <Box w={["", "full"]} h={["md", "2xl"]}>
      <Img src={img1} h={"full"} objectFit="cover" />
    </Box>

    <Box w={["", "full"]} h={["md", "2xl"]}>
      <Img src={img3} h={"full"} objectFit="cover" />
    </Box>
  </Carousel>
);
