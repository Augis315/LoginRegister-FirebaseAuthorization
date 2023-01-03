import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
import { useState } from "react";
import classes from "./Welcome.module.css";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { signIn } = UserAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signIn(email, password);
      navigate("/");
    } catch (e) {
      setError(e.message);
      console.log(e.message);
    }
  };

  return (
    <div className={classes.fullScreenContainer}>
      <div className={classes.loginContainer}>
        <div className={classes.loginTitle}>
          <h1>Welcome</h1>
          <h2>Sign in to your account</h2>
        </div>
        <form onSubmit={handleSubmit}>
          <div className={classes.inputGroup}>
            <label>Email Address</label>
            <input onChange={(e) => setEmail(e.target.value)} type="email" />
          </div>
          <div className={classes.inputGroup}>
            <label>Password</label>
            <input
              onChange={(e) => setPassword(e.target.value)}
              type="password"
            />
          </div>
          <p className={classes.haveDontAcc}>
            Don't have an account?{" "}
            <Link className={classes.haveDontAcc} to="/signup">
              Sign Up.
            </Link>
          </p>
          <button className={classes.loginBtn}>Sign in</button>
        </form>
      </div>
    </div>
  );
};

export default Signin;
