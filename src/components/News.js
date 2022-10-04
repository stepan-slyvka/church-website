import React, { useEffect } from "react";

import classes from "./News.module.css";

import Schedule from "../assets/schedule-test.jpg";

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
          <h1>Розклад богослужінь(наразі не актуальний)</h1>
          <img src={Schedule} alt="schedule" />
        </div>

        {/* News */}

        <div className={classes.news}>
          <h1>Актуальні новини</h1>

          <div className={classes.wrapper}>
            <p>В нашому храмі триває ремонт</p>
          </div>

          <div className={classes.wrapper}>
            <p>Проводиться збір-пожертва для вимушених переселенців</p>
          </div>

          <div className={classes.wrapper}>
            <p>
              27 вересня 2022 року - Воздвиження чесного і животворящого Хреста
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default News;
