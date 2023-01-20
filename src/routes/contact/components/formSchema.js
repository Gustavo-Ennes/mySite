import * as yup from "yup";

const formSchema = yup.object().shape({
  message: yup
    .string()
    .required("Message is required.")
    .min(20, "Message must be at least 20 characters."),
  email: yup
    .string()
    .required("Email is required.")
    .email("Invalid email format."),
  name: yup
    .string()
    .required("Name is required.")
    .min(3, "Name must be at least 3 characters."),
});

export { formSchema };
