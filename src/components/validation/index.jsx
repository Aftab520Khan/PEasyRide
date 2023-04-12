import * as Yup from "yup";

export const signUpValidation = Yup.object({
  name: Yup.string().min(2).max(50).required("Please enter your name"),
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
    .required("Please enter your  zipcode  "),
});

export const contactUs = Yup.object({
  name: Yup.string().min(2).max(50).required("Please enter your name"),
  email: Yup.string().email().required("Please enter your email "),
  message:Yup.string().required()
})


export const  mApply =Yup.object({
  fname: Yup.string().min(2).max(25).required('Please enter your First name'),
  lname: Yup.string().min(2).max(18).required('Please enter your Last name'),
  email: Yup.string().email().required('Please enter your email'),
  mobile: Yup.string().min(10).max(10).required('Please enter your phone no'),
  zcode: Yup.string().min(6).max(6).required('Please enter your zipcode')

})

export const NewCar = Yup.object({
zcode:Yup.string().min(6).max(6).required('Please enter your zipcode'),
car:Yup.string().required(),
B:Yup.string().required(),
H:Yup.string().required(),
M:Yup.string().required(),
R:Yup.string().required(),
S:Yup.string().required(),
T:Yup.string().required(),
})



