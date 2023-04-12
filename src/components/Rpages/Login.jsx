import {
  Text,
  Button,
  Container,
  Heading,
  Input,
  VStack,
  Toast,
  useToast,
  
} from "@chakra-ui/react";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import {  useFormik } from "formik";
import { loginValidation } from "../validation";
import axios from 'axios'


const initialValues = {
  email: "",
  password: "",
};
export const Login = (props) => {
  const nav = useNavigate();
  const toast = useToast()

  
  
    const PostData = async () => {
      const res = await fetch("/api/user/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          
          email: values.email,
          password: values.password,
        }),
      });
      const data = await res.json();
      if (data.status === 422 || !data) {
       toast(
        {
          title:'Invalid email and password',
          status:'error',
          isClosable:true,
          position:'top'
        }
       )
        console.log("Invalid Credentials");
      } else {
        toast(
          {
            title:'Successfully logged in ',
            status:'success',
            isClosable:true,
            position:'top'
          })
        console.log("Successfully ");
        nav("/");
      }
    };

  
  
    const { values, errors, handleChange, touched, handleBlur,handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: loginValidation,
      onSubmit: (values, action) => {
        console.log(values);
        PostData();
        action.resetForm();
        
      },
     
    });

  return (
    <>
  
      <Container  maxW="container.xl" h={['auto',"100vh"]} p="16">
        <form method="POST"  onSubmit={handleSubmit}>
        
         <VStack
            alignItems={"stretch"}
            spacing="8"
            w={["auto", "96"]}
            m="auto"
            my="16"
            bgColor="gray.900"
            p="10"
            color="white"
            borderRadius={15}
          >
            <Heading align="center" paddingBottom={8}>
              Welcome {props.name} !
            </Heading>
            <Input
              placeholder="Email"
              type={"email"}
              name="email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              focusBorderColor="darkgreen"
            />
            {errors.email && touched.email ? (
              <Text color="red">{errors.email}</Text>
            ) : null}
            <Input
              placeholder="Password"
              type={"passward"}
              name="password"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
              focusBorderColor="darkgreen"
            />
            {errors.password && touched.password ? (
              <Text color="red">{errors.password}</Text>
            ) : null}
            <Button variant={"link"} colorScheme="green" alignSelf="flex-end">
              <Link to={"/forget"}>Forget Password</Link>
            </Button>
            <Button   colorScheme="green" type="submit" >
              Login
            </Button>
            <Text textAlign={"right"}>
              New User?
              <Button variant={"link"} colorScheme="green">
                <Link to={"/signup"}>Sign Up</Link>
              </Button>
            </Text>
           
          </VStack>
         
        </form>
      </Container>
      
    </>
  );
};
