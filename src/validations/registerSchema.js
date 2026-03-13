import * as yup from 'yup'

export const registerSchema = yup.object({
    fullName: yup.string().required("Please enter your full name"),
    email: yup.string().required("Please enter your email.").email("Please enter a valid email."),
    password: yup.string().required("Password cannot be empty.").min(8, "Password must at least be 8 characters.").matches(/\d/, "Password must contain at least one number"),
    confirmPassword: yup.string().required("Please confirm your password.").oneOf([yup.ref("password")],"Password must match."),
    terms: yup.boolean().oneOf([true], ["You must accept the terms & defaultClientConditions"])
})