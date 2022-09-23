import React from "react";

import { NavLink } from "react-router-dom";

import Logo from "../assets/logo.png";

import classes from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={classes.wrapper}>
      <div className={classes.logo}>
        <img src={Logo} alt="Logo" />
      </div>
      <div className={classes.menu}>
        <ul>
          <li>
            <NavLink className={classes.link} to="">
              Головна
            </NavLink>
          </li>
          <li>
            <NavLink className={classes.link} to="about">
              Про нас
            </NavLink>
          </li>
          <li>
            <NavLink className={classes.link} to="news">
              Новини
            </NavLink>
          </li>
          <li>
            <NavLink className={classes.link} to="contact">
              Контакти
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
