import React from "react";
import Navbar from "./Navbar";
import classes from "./Account.module.css";
import app from "../firebase";

const Account = () => {
  return (
    <div>
      <Navbar />
      <div className={classes.AccFullScreenContainer} />
    </div>
  );
};

export default Account;
