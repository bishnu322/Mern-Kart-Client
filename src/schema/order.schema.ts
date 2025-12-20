import * as yup from "yup";

export const orderSchema = yup.object({
  country: yup.string().required("Country is required"),

  state: yup.string().required("State is required"),

  city: yup.string().required("City is required"),

  street: yup.string().required("Street is required"),
});

export type TOrderFormValues = yup.InferType<typeof orderSchema>;
