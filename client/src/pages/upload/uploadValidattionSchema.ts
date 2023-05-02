import * as Yup from "yup";

const uploadValidationSchema = Yup.object({
  caption: Yup.string()
    .min(3, "Must be 3 characters or more")
    .required("Field is required"),
});

export default uploadValidationSchema;
