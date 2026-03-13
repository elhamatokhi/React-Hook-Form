import { useState } from "react";
import { set, useForm } from "react-hook-form";
import '../styles/login.css'
import { useNavigate } from "react-router-dom";

export default function LoginForm({ onSwitchToRegister}){
    const navigate = useNavigate() // To redirect after login
    const [success, setSuccess] = useState("")

    const { 
        register,
        handleSubmit,
        formState: {errors, isSubmitting},
        reset
    } = useForm
    ({
        mode:"onTouched"
    })

    function onSubmit(data){
        console.log("User Logged In: ", data)
        setSuccess("Login successfull!")
        navigate("/dashboard")
    }

    function handleReset(){
        reset()
        setSuccess("")
    }

    return (
        <form className="login" onSubmit={handleSubmit(onSubmit)}>
            <h2>Login</h2>
        
        {success && <div className="login__success">{success}</div>}

        {/* Email  */}
        <div className="login__field">
            <label className="login__label">Email</label>
            <input 
            type="email" 
            className="login__input" 
            placeholder="you@example.com"
            {...register("email",{required: "Email is required"})}
            />

            {errors.email && (
                <div className="login__error">{errors.email.message}</div>
            )}
        </div>


        {/* Password */}
        <div className="logi__field">
            <label className="login__label">Password</label>
            <input type="password" className="login__input" 
            placeholder="Enter password"
            {...register("password", {required: "Password is required"})}
            />

            {errors.password && (
                <div className="login__error">{errors.password.message}</div>
            )}
        </div>

        {/* Actions */}
        <div className="login__actions">
            <button type="submit" disabled={isSubmitting}>Login</button>
            <button type="button" onClick={handleReset}>Reset</button>
        </div>

        <p className="login__switch">
            Don't have an account?
            <button type="button" onClick={() => navigate("/register")}> Register</button>
        </p>

        </form>
    )

}

