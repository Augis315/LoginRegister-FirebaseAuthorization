import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../Navbar";
import classes from "../Shop/Shop.module.css";

const Shop = () => {
  return (
    <div>
      <Navbar />
      <div className={classes.fullScreenContainer}>
        <h1>Coming soon</h1>
      </div>
    </div>
  );
};

export default Shop;
