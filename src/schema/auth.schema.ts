import * as yup from "yup";

export const loginSchema = yup.object({
  email: yup
    .string()
    .required("email is required")
    .email("invalid email format"),
  password: yup.string().required("password is required"),
});

export const signUpSchema = yup.object({
  first_name: yup.string().required("first name cannot be empty"),
  last_name: yup.string().required("last name cannot be empty"),
  phone_number: yup.string().required("phone number is required"),
  email: yup
    .string()
    .required("email is required")
    .email("invalid email format"),
  password: yup.string().required("password is required"),
  confirm_password: yup.string().required("password is required"),
});
