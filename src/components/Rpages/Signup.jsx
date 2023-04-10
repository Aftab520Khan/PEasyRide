import React from "react";
import logo from "./../../assets/logo.svg";
import {
  Text,
  Button,
  Container,
  Heading,
  Input,
  VStack,
  Avatar,
  HStack,
  Image,
} from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { signUpValidation } from "../validation";

const initialValues = {
  name: "",
  email: "",
  password: "",
};

export const Signup = () => {
  const nav = useNavigate();

  const { values, errors, handleChange, touched, handleBlur, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: signUpValidation,
      onSubmit: (values, action) => {
        console.log(values);
        PostData();
        action.resetForm();
      },
    });

  const PostData = async () => {
    const res = await fetch("/api/user/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: values.name,
        email: values.email,
        password: values.password,
      }),
    });
    const data = await res.json();
    if (data.status === 422 || !data) {
      window.alert("Invalid Credentials");
      console.log("Invalid Credentials");
    } else {
      window.alert("Successfully ");
      console.log("Successfully ");
      nav("/login");
    }
  };

  return (
    <>
      <Container maxW="container.xl" h={["auto", "100vh"]} p="16">
        <form method="POST" onSubmit={handleSubmit}>
          <VStack
            alignItems={"stretch"}
            spacing="6"
            w={["auto", "96"]}
            m="auto"
            my={"16"}
            bgColor="gray.900"
            p={["5", "10"]}
            color="white"
            borderRadius={15}
          >
            <HStack spacing={[2, 6]} alignSelf={"center"}>
              <Image src={logo} w={["60px", "100px"]} />
              <Heading textAlign={"center"}>EasyRide</Heading>
            </HStack>

            <Avatar
              alignSelf={"center"}
              boxSizing="border-box"
              boxSize={"32"}
            />

            <Input
              placeholder="Name"
              type={"text"}
              name="name"
              value={values.name}
              focusBorderColor="darkgreen"
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.name && touched.name ? (
              <Text color={"red"}>{errors.name}</Text>
            ) : null}
            <Input
              placeholder="Email"
              type={"email"}
              name="email"
              value={values.email}
              focusBorderColor="darkgreen"
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.email && touched.email ? (
              <Text color={"red"}>{errors.email}</Text>
            ) : null}
            <Input
              placeholder="Password"
              type={"passward"}
              name="password"
              value={values.password}
              focusBorderColor="darkgreen"
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.password && touched.password ? (
              <Text color={"red"}>{errors.password}</Text>
            ) : null}
            <Button colorScheme="green" type="submit">
              Sign In
            </Button>

            <Text textAlign={"right"}>
              Already have an account?
              <Button variant={"link"} colorScheme="green">
                <Link to={"/login"}>Login</Link>
              </Button>
            </Text>
          </VStack>
        </form>
      </Container>
    </>
  );
};
