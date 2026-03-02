import * as yup from "yup"

export const loginSchema = yup.object({
    email: yup.string().required("Email is required.").email("Enter valid email."),
    password: yup.string().required("Password can't be empty.").min(8, "Password must be at least 8 charachters.")
})