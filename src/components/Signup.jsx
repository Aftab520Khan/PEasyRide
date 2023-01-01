import React from "react";
import logo from '../assets/logo.svg'
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
import { Link } from "react-router-dom";
import { useFormik} from 'formik'
import { signUpValidation } from "./validation";


const initialValues={
  name:'',
  email:"",
  password:''
}

export const Signup = () => {
  const {values,errors,handleChange,touched,handleBlur,handleSubmit} =useFormik({
    initialValues:initialValues,
    validationSchema:signUpValidation,
    onSubmit:(values,action)=>{
     console.log(values)
    action.resetForm()
    }
  })

  return (
    <>
      <Container maxW="container.xl" h="100vh" p="16">
        <form onSubmit={handleSubmit}>
          <VStack
            alignItems={"stretch"}
            spacing="6"
            w={["full", "96"]}
            m="auto"
            my={"16"}
            bgColor='gray.900'
            p='10'
            color='white'
            borderRadius={15}
          >
            <HStack spacing={6}   alignSelf={'center'}>
            <Image src={logo}  w={["80px", "100px"]}/>
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
              name='name'
              value={values.name}
              focusBorderColor="darkgreen"
              onChange={handleChange}
              onBlur={handleBlur}
            />
            { errors.name && touched.name?
              (<Text color={'red'}>{errors.name}</Text>): null
            }
            <Input
              placeholder="Email"
              type={"email"} 
              name='email'
              value={values.email}
              focusBorderColor="darkgreen"
              onChange={handleChange}
              onBlur={handleBlur}
            />
            { errors.email && touched.email?
              (<Text color={'red'}>{errors.email}</Text>): null
            }
            <Input
              placeholder="Password"
              type={"passward"} 
              name='password'
              value={values.password}
              focusBorderColor="darkgreen"
              onChange={handleChange}
              onBlur={handleBlur}
            />
            { errors.password && touched.password?
              (<Text color={'red'}>{errors.password}</Text>): null
            }

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
