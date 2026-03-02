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

      {/* Password field */}
      <div className="field">
        <label htmlFor="reg-password">Password</label>
        <input
          id="reg-password"
          name="password"
          type={showPassword ? "text" : "password"}
          placeholder="Enter your password...."
          {...register("password")}
          autoComplete="new-password"
        />
        {/* Show password checkbox */}
        <div>
          <label htmlFor="">Show password</label>
          <input
            className="checkbox"
            type="checkbox"
            checked={showPassword}
            onChange={(e) => setShowPasswrod(e.target.checked)}
          />
          <span>Min 6 characters</span>
        </div>
        {errors.password && (
          <div className="error"> {errors.password.message} </div>
        )}
      </div>

      {/* Confirm password */}
      <div className="field">
        <label htmlFor="reg-confirm">Confirm Password</label>
        <input
          id="reg-confirm"
          name="confirmPassword"
          type={showPassword ? "text" : "password"}
          placeholder="Confirm password..."
          {...register("confirmPassword")}
          autoComplete="new-password"
        />
        {errors.confirmPassword && (
          <div className="error">{errors.confirmPassword.message}</div>
        )}
      </div>

      {/* Actions to submit form */}
      <div>
        <button className="primary">
            Create account
        </button>

        <button>Reset</button>

        <p> Already have an account? <button> Login</button></p>
      </div>
    </form>
  );
}
