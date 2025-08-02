import { useRef, useState } from "react";
import classes from "./Login.module.css";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { Button } from "@mantine/core";
import Header from "../Layout/Header";
import { authActions } from "../../store/authSlice";
import { useDispatch } from "react-redux";

const Login = () => {
  const dispatch = useDispatch();
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const [isFormValid, setIsFormValid] = useState(false);

  const navigate = useNavigate();

  const submitHandler = (event) => {
    event.preventDefault();
    if (
      emailInputRef.current.value.trim().includes("@") &&
      passwordInputRef.current.value.trim().length >= 6
    ) {
      dispatch(authActions.login());
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

  const checkIsFormValid = () => {
    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    if (
      enteredEmail.trim().includes("@") &&
      enteredEmail.trim().endsWith("@gmail.com") &&
      enteredPassword.trim().length >= 6
    ) {
      setIsFormValid(true);
    } else {
      setIsFormValid(false);
    }
  };

  return (
    <>
      <Header />
      <div className={classes.container}>
        <div className={classes.card}>
          <h2 className={classes.title}>Sign In</h2>
          <form className={classes.form} onSubmit={submitHandler}>
            <input
              type="email"
              placeholder="Email"
              ref={emailInputRef}
              className={classes.input}
              onChange={checkIsFormValid}
            />
            <input
              type="password"
              placeholder="Password"
              className={classes.input}
              ref={passwordInputRef}
              onChange={checkIsFormValid}
            />
            <Button disabled={!isFormValid} type="submit">
              Login
            </Button>
          </form>
          <p className={classes.footerText}>
            Don't have an account?{" "}
            <a href="#" className={classes.link}>
              Sign up
            </a>
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;
