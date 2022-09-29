import React from "react";

import { NavLink } from "react-router-dom";

import Logo from "../assets/logo.png";

import classes from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav name="navbar" className={classes.wrapper}>
      {/* Logo */}

      <div className={classes.logo}>
        <img src={Logo} alt="Logo" />
      </div>

      {/* Menu */}

      <div className={classes.menu}>
        <ul>
          <li>
            <NavLink
              className={(navData) =>
                navData.isActive ? classes.active : classes.link
              }
              to="/home"
            >
              Головна
            </NavLink>
          </li>
          <li>
            <NavLink
              className={(navData) =>
                navData.isActive ? classes.active : classes.link
              }
              to="about"
            >
              Про нас
            </NavLink>
          </li>
          <li>
            <NavLink
              className={(navData) =>
                navData.isActive ? classes.active : classes.link
              }
              to="news"
            >
              Новини
            </NavLink>
          </li>
          <li>
            <NavLink
              className={(navData) =>
                navData.isActive ? classes.active : classes.link
              }
              to="contact"
            >
              Контакти
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
