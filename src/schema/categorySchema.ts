import * as yup from "yup";

export const categorySchema = yup.object({
  name: yup.string().required("category name is required !"),
  description: yup
    .string()
    .required("category description  is required !")
    .min(25, "min length of description is 25 character"),
});
