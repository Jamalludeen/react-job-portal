import React, { useContext, useRef } from "react";
import classes from "./Login.module.css";
import AuthContext from "../../store/auth-context";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Login = () => {
  const authCtx = useContext(AuthContext);
  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const navigate = useNavigate();

  const submitHandler = (event) => {
    event.preventDefault();
    console.log(emailInputRef.current.value, passwordInputRef.current.value);
    if (
      emailInputRef.current.value.trim().includes("@") &&
      passwordInputRef.current.value.trim().length > 6
    ) {
      authCtx.onLogin();
      navigate("/");
    } else {
      Swal.fire({
        title: "Invalid Credentials",
        text: "Enter valid email and password",
        icon: "error",
        confirmButtonText: "OK",
      });
    }
  };

  return (
    <div className={classes.container}>
      <div className={classes.card}>
        <h2 className={classes.title}>Sign In</h2>
        <form className={classes.form} onSubmit={submitHandler}>
          <input
            type="email"
            placeholder="Email"
            ref={emailInputRef}
            className={classes.input}
          />
          <input
            type="password"
            placeholder="Password"
            className={classes.input}
            ref={passwordInputRef}
          />
          <button type="submit" className={classes.button}>
            Login
          </button>
        </form>
        <p className={classes.footerText}>
          Don't have an account?{" "}
          <a href="#" className={classes.link}>
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
