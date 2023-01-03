import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
import classes from "./Welcome.module.css";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { createUser } = UserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await createUser(email, password);
      navigate("/");
    } catch (e) {
      setError(e.message);
    }
  };

  return (
    <div className={classes.fullScreenContainer}>
      <div className={classes.loginContainer}>
        <div className={classes.loginTitle}>
          <h1>Sign up for a free account</h1>
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
            Already have an account?{" "}
            <Link className={classes.haveDontAcc} to="/">
              Sign in.
            </Link>
          </p>
          <button className={classes.loginBtn}>Sign Up</button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
