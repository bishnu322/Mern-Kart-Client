import * as yup from "yup";

export const brandSchema = yup.object({
  brand_name: yup.string().required("Name is required!"),
  logo: yup.string().required("logo is required"),
  description: yup.string().required("Description is required!"),
});
