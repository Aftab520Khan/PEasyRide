import React from "react";
import { Button, Heading, Input, Stack, VStack, Text } from "@chakra-ui/react";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { mApply } from "../validation";

const initialValues = {
  fname: "",
  lname: "",
  email: "",
  mobile: "",
  zcode: "",
};

export const MApply = () => {
  const nav =useNavigate()
  const { values, errors, handleChange, touched, handleBlur, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: mApply,
      onSubmit: (values, action) => {
        console.log(values);
        SubmitApply()
        action.resetForm();
      },
    });

    const SubmitApply = async()=>{
      const res = await fetch('/api/mechanic/apply',{
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify({
          fname:values.fname,
          lname:values.lname,
          email:values.email,
         mobile:values.mobile,
          zcode:values.zcode
        })
      })
      const data = await res.json();
      if (data.status === 422 || !data) {
        window.alert("Invalid Credentials");
        console.log("Invalid Credentials");
      } else {
        window.alert("Successfully ");
        console.log("Successfully ");
        nav("/");
      }
    }
  return (
    <div>
      <Stack m="10" align={"center"}>
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
            <Heading>Apply to be a Mechanic</Heading>
            <Input
              type="text"
              placeholder="First name"
              name="fname"
              value={values.fname}
              focusBorderColor="darkgreen"
              onChange={handleChange}
              onBlur={handleBlur}
            />

            {errors.fname && touched.fname ? (
              <Text color={"red"}>{errors.fname}</Text>
            ) : null}

            <Input
              type="text"
              placeholder="Last name"
              name="lname"
              value={values.lname}
              focusBorderColor="darkgreen"
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.lname && touched.lname ? (
              <Text color={"red"}>{errors.lname}</Text>
            ) : null}

            <Input
              type="email"
              placeholder="Email"
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
              type="number"
              placeholder="Mobile Number"
              name="mobile"
              value={values.mobile}
              focusBorderColor="darkgreen"
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.mobile && touched.mobile ? (
              <Text color={"red"}>{errors.mobile}</Text>
            ) : null}
            <Input
              type="text"
              placeholder="Postcode"
              name="zcode"
              value={values.zcode}
              focusBorderColor="darkgreen"
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.zcode && touched.zcode ? (
              <Text color={"red"}>{errors.zcode}</Text>
            ) : null}
            <Button colorScheme={"green"} type="submit">
              Join free
            </Button>
          </VStack>
        </form>
      </Stack>
    </div>
  );
};
