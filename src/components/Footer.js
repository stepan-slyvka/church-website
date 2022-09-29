import React from "react";

import classes from "./Footer.module.css";

import Logo from "../assets/logo.png";

const Footer = () => {
  return (
    <footer className={classes.footer}>
      {/* Logo */}

      <div>
        <img src={Logo} alt="logo" />
      </div>

      {/* Info */}

      <div className={classes.wrapper}>
        <h1>
          Храм святого Архистратига Михаїла та всіх безплотних сил с. Нове
          Давидково
        </h1>
        <p>2022</p>
      </div>
    </footer>
  );
};

export default Footer;
