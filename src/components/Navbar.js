import { click } from "@testing-library/user-event/dist/click";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import classes from "./Navbar.module.css";
import styles from "./Welcome.module.css";
import { useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const { logout } = UserAuth();
  const navigate = useNavigate();

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const handleLogout = async () => {
    try {
      await logout();
      navigate("/");
      console.log("you are logged out");
    } catch (e) {
      console.log(e.message);
    }
  };

  return (
    <>
      <nav className={classes.navbar}>
        <div className={classes.navbarContainer}>
          <Link to="/" className={classes.navbarLogo}>
            LOGO
          </Link>
          <div className={classes.menuIcon} onClick={handleClick}>
            {/* REIKIA MENU BURGERIO IR BARSU ICONO */}
            <i className={click ? "///" : "xx"}></i>
          </div>
          <ul className={classes.navMenu}>
            <li className={classes.navItem}>
              <Link
                to="/shop"
                className={classes.navLinks}
                onClick={closeMobileMenu}
              >
                Shops
              </Link>
            </li>

            <li className={classes.navItem}>
              <button className={classes.logoutBtn} onClick={handleLogout}>
                LOGOUT
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
