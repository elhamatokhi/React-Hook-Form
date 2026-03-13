import { useState } from "react";
import { useForm } from "react-hook-form";
import { registerSchema } from "../validations/registerSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import '../styles/register.css'

export default function RegisterForm({onSwitchToLogin}) {
  // Show password checkbox
  const [showPassword, setShowPasswrod] = useState(false);

  // Show success message
  const [success, setSuccess] = useState("");

  // Validate using react-hook-form
  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isSubmitting },
    reset,
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
    <form className="register" onSubmit={handleSubmit(onSubmit)}>
      {success && <div className="register__success">{success}</div>}

      <div className="register__field">
        <label htmlFor="reg-fullname" className="register__label">
          {" "}
          Full Name
        </label>
        <input
          className="register__input"
          type="text"
          id="reg-fullname"
          name="fullName"
          placeholder="Your full name"
          {...register("fullName")}
          autoComplete="name"
        />
        {errors.fullName && (
          <div className="register__error"> {errors.fullName.message}</div>
        )}
      </div>

      <div className="register__field">
        <label htmlFor="reg-email" className="register__label">
          Email
        </label>
        <input
          className="register__input"
          id="reg-email"
          name="email"
          type="email"
          placeholder="you@example.com"
          {...register("email")}
          autoComplete="email"
        />
        {errors.email && <div className="register__error">{errors.email.message}</div>}
      </div>

      {/* Password */}
      <div className="register__field">
        <label htmlFor="reg-password" className="register__label">
          Password
        </label>
        <input
          className="register__input"
          id="reg-password"
          name="password"
          type={showPassword ? "text" : "password"}
          placeholder="Enter your password...."
          {...register("password")}
          autoComplete="new-password"
        />

        {/* Show password checkbox */}
        <div className="register__password-toggle">
          <label htmlFor="" className="register__checkbox-label">
            Show password
          </label>
          <input
            className="register__input"
            type="checkbox"
            checked={showPassword}
            onChange={(e) => setShowPasswrod(e.target.checked)}
          />
          <span className="register__hint">Min 6 characters</span>
        </div>
        {errors.password && (
          <div className="register__error"> {errors.password.message} </div>
        )}
      </div>

      {/* Confirm password */}
      <div className="register__field">
        <label htmlFor="reg-confirm" className="register__label">
          Confirm Password
        </label>
        <input
          className="register__input"
          id="reg-confirm"
          name="confirmPassword"
          type={showPassword ? "text" : "password"}
          placeholder="Confirm password..."
          {...register("confirmPassword")}
          autoComplete="new-password"
        />
        {errors.confirmPassword && (
          <div className="register__error">{errors.confirmPassword.message}</div>
        )}
      </div>

      {/* Terms */}
      <div className="register__terms">
        <label className="register__checkbox-label">
          <input
            type="checkbox"
            {...register("terms")}
          />
          I agree to the Terms & Conditions
        </label>

        {errors.terms && (
          <p className="form-group__error">{errors.terms.message}</p>
        )}
      </div>

      {/* Actions */}
      <div className="register__actions">
        <button type="submit" className="register__button register__button--primary" disabled={!isValid || isSubmitting}>
          Create account
        </button>

        <button type="button" className="register__button register__button--secondary" onClick={handleReset}>Reset</button>

         <p className="register__switch">
          Already have an account?
          <button  type="button" className="register__link" onClick={onSwitchToLogin}> Login</button>
        </p>
      </div>
    </form>
  );
}
