import React from "react";
import { MdPlace } from "react-icons/md";
import { BiCar } from "react-icons/bi";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { NewCar } from "../../validation";
import {
  FormControl,
  InputGroup,
  Text,
  Button,
  InputLeftElement,
  Input,
  Select,
} from "@chakra-ui/react";
import { GrFormNextLink } from "react-icons/gr";
const initialValues = {
  zipcode: "",
  rnumber: "",
  selectmake: "",
};
export const DCar = () => {
  const nav = useNavigate();
  const { values, errors, handleChange, touched, handleBlur, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: NewCar,
      onSubmit: (values, action) => {
        console.log(values);
        nav("/se");
        action.resetForm();
      },
    });

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <FormControl pt="5" pb="8">
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
            {errors.zipcode && touched.zipcode ? <>{errors.zipcode}</> : null}
          </Text>
          <br />

          <Select
            my="4"
            name="car"
            value={values.car}
            placeholder="Select Make"
          >
            <option name="M" value={values.M}>
              Maruthi Suzuki
            </option>
            <option name="R" value={values.R}>
              Wagon R
            </option>
            <option name="H" value={values.H}>
              Honda
            </option>
            <option name="S" value={values.S}>
              Skoda
            </option>
            <option name="B" value={values.B}>
              Brezza
            </option>
            <option name="T" value={values.T}>
              TOYOTA
            </option>
          </Select>
          {errors.car && touched.car ? (
            <Text color="red">{errors.car}</Text>
          ) : null}

          <Select my="4" placeholder="Select Model">
            {" "}
            <option>CNG</option>
          </Select>
          <Select my="4" placeholder="Select Fuel Type">
            <option>Petrol</option>
            <option>Desiel</option>
            <option>CNG</option>
          </Select>

          <Select my="4" placeholder="Select Engine Capacity">
            {" "}
            <option>CNG</option>
          </Select>

          <Select my="4" placeholder="Select Year">
            {" "}
            <option>CNG</option>
          </Select>
        </FormControl>
        <Button
          pl="10"
          pr="10"
          color="black"
          colorScheme={"green"}
          type="submit"
          onClick={handleSubmit}
        >
          Next
          <GrFormNextLink fontSize={"28"} />
        </Button>
      </form>
    </div>
  );
};
