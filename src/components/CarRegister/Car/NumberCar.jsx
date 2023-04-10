import React from 'react'
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { MdPlace } from "react-icons/md";
import { registration } from "../../validation";
import { BiCar } from "react-icons/bi";
import {
    FormControl,
    InputGroup,
    Text,
    InputLeftElement,
    Input,
    Button
    
  } from "@chakra-ui/react";
  import { GrFormNextLink } from "react-icons/gr";
  const initialValues = {
    zipcode: "",
    rnumber: "",  
  };
 

export const NumberCar = () => {
    const nav = useNavigate();
    const { values, errors, handleChange, touched, handleBlur, handleSubmit } =
      useFormik({
        initialValues: initialValues,
        validationSchema: registration,
        onSubmit: (values, action) => {
          console.log(values);
          nav('/se')
          action.resetForm();
        },
      });

  return (
    <div>
        <form onSubmit={handleSubmit}>
                <FormControl pt="5" pb="10">
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
                </FormControl>
                <Button
                  pl="10"
                  pr="10"
                  color="black"
                  colorScheme={"green"}
                  type="submit"
                >
                  Next
                  <GrFormNextLink fontSize={"28"} />
                </Button>
        </form>
    </div>
  )
}
