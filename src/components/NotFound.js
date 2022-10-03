import React from "react";

import classes from "./NotFound.module.css";

const NotFound = () => {
  return (
    <div className={classes.centered}>
      <h1>404</h1>
      <p>Сторінку не знайдено.</p>
    </div>
  );
};

export default NotFound;
