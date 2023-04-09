import {
  Heading,
  Text,
  Input,
  Textarea,
  Button,
  Stack,
  VStack,
  useToast,
} from "@chakra-ui/react";
import React, {  useRef } from "react";
import { contactUs } from "../validation";
import { useFormik } from "formik";
import emailjs from '@emailjs/browser';

const initialValues = {
  name: "",
  email: "",
  message: "",
};

export const ContactUs = () => {
  const form = useRef();
  const toast  =useToast()


  const { values, errors, handleChange, touched, handleBlur, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: contactUs,
      onSubmit: (values, action) => {
        console.log(values);
        sendEmail()
        action.resetForm(values.message);
      },
    });



    const sendEmail = () => {
      emailjs.sendForm('service_ty5s4zf', 'template_ogjlz04', form.current, '-wCaQT1t-PArSaMyi')
        .then((result) => {
            console.log(result.text);
            toast({
              title:'Message sent successfully',
              status:'success',
              isClosable:true,
              position:'top'
            })
        }, (error) => {
            console.log(error.text);
        });
    };

  return (
    <div>
      <Stack p="10" h={"90vh"}>
        <form ref={form} onSubmit={handleSubmit}>
          <Heading align="center" pb="10">
            ContactUs
          </Heading>
          <VStack mx="20">
            <Input
              placeholder="Name"
              type={"name"}
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

            <Textarea
              placeholder="Message"
              type={"textarea"}
              name="message"
              value={values.message}
              focusBorderColor="darkgreen"
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.message && touched.message ? (
              <Text color={"red"}>{errors.message}</Text>
            ) : null}

            <Button  colorScheme="green" type="submit">
              Send Message
            </Button>
          </VStack>
        </form>
      </Stack>
    </div>
  );
};
