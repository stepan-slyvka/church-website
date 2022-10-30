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
          <h1>Розклад богослужінь(31.10.2022 - 06.11.2022)</h1>
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
            <p>31 жовтня 2022 року - день пам'яті мученика Теодора Ромжі</p>
          </div>

          <div className={classes.wrapper}>
            <p>1 листопада 2022 року - день пам'яті всіх померлих</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default News;
