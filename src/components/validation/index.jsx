import * as Yup from "yup";

export const signUpValidation = Yup.object({
  name: Yup.string().min(2).max(25).required("Please enter your name"),
  email: Yup.string().email().required("Please enter your email "),
  password: Yup.string().min(6).required("Please enter your password"),
});

export const loginValidation = Yup.object({
  email: Yup.string().email().required("Please enter your email "),
  password: Yup.string().min(6).required("Please enter your password"),
});

export const registration = Yup.object({
  rnumber: Yup.string()
    .min(10)
    .max(10)
    .required("Please enter your registration number "),
  zipcode: Yup.string()
    .min(6)
    .max(6)
    .required("Please enter  your full  zipcode  "),
});
