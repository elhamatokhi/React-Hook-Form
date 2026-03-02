import { useState } from "react";
import { yupResolver } from "@hook";
import { useForm } from "react-hook-form";
import { registerSchema } from "../validations/registerSchema";
import { yupResolver } from "@hookform/resolvers/yup";

export default function RegisterForm() {
  // Show password checkbox
  const [showPassword, setShowPasswrod] = useState(false);

  // Show success message
  const [success, setSuccess] = useState("");

  // Validate using react-hook-form
  const {
    register,
    handleSubmit,
    reset,
    formstate: { errors, isValid, isSubmitting },
  } = useForm({
    resolver: yupResolver(registerSchema),
    mode: "onTouched",
  });

  // Print data and show success message after successful submition
  function onSubmit(data) {
    console.log("The Following User Registered: ", {
      fullName: data.fullName,
      email: data.email,
      password: data.password,
    });

    setSuccess(
      "✅ Register UI submitted successfully (check console for data).",
    );
  }

  // Reset the form
  function handleReset() {
    reset();
    setShowPasswrod(false);
    setSuccess("");
  }

  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
      {success && <div className="success">{success}</div>}

      <div className="field">
        <label htmlFor="reg-fullname"> Full Name</label>
        <input
          type="text"
          id="reg-fullname"
          name="fullName"
          placeholder="Your full name"
          {...register("fullName")}
          autoComplete="name"
        />
        {errors.fullName && (
          <div className="error"> {errors.fullName.message}</div>
        )}
      </div>

      <div className="field">
        <label htmlFor="reg-email">Email</label>
        <input
          id="reg-email"
          name="email"
          type="email"
          placeholder="you@example.com"
          {...register("email")}
          autoComplete="email"
        />
        {errors.email && <div className="error">{errors.email.message}</div>}
      </div>
    </form>
  );
}
