import React, { useEffect } from "react";

import classes from "./News.module.css";

import Schedule from "../assets/schedule.jpg";

import ReactGA from "react-ga";

const News = () => {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname);
  }, []);

  return (
    <div className={classes["main-wrapper"]}>
      <section className={classes.container}>
        {/* Schedule */}

        <div className={classes.schedule}>
          <h1>Розклад богослужінь(10.10.2022 - 16.10.2022)</h1>
          <img src={Schedule} alt="schedule" />
        </div>

        {/* News */}

        <div className={classes.news}>
          <h1>Актуальні новини</h1>

          <div className={classes.wrapper}>
            <p>В нашому храмі триває ремонт</p>
          </div>

          <div className={classes.wrapper}>
            <p>
              Проводиться збір-пожертва для вимушених переселенців. Церква
              відкрита завжди
            </p>
          </div>

          <div className={classes.wrapper}>
            <p>14 жовтня 2022 року - Покров Пресвятої Богородиці</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default News;
