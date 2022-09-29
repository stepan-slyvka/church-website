import React, { Fragment } from "react";

import Church from "../assets/cropped-images/church-bg.jpg";

import Inside from "../assets/cropped-images/church-inside.jpg";

import classes from "./Home.module.css";

import Location from "../assets/cropped-images/location.jpg";

import { GrMapLocation } from "react-icons/gr";

import "react-responsive-carousel/lib/styles/carousel.min.css";

import { Carousel } from "react-responsive-carousel";

import Photo1 from "../assets/cropped-images/slider/1.jpg";
import Photo2 from "../assets/cropped-images/slider/2.jpg";
import Photo3 from "../assets/cropped-images/slider/3.jpg";
import Photo4 from "../assets/cropped-images/slider/4.jpg";
import Photo5 from "../assets/cropped-images/slider/5.jpg";
import Photo6 from "../assets/cropped-images/slider/6.jpg";
import Photo8 from "../assets/cropped-images/slider/8.jpg";
import Photo9 from "../assets/cropped-images/slider/9.jpg";
import Photo10 from "../assets/cropped-images/slider/10.jpg";

import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <Fragment>
      {/* Main */}

      <section className={classes["main-wrapper"]}>
        <img src={Church} alt="church" />

        <div className={classes.container}>
          <div className={classes.name}>
            <h1>
              Греко-католицька громада святого Архистратига Михаїла та всіх
              безплотних сил с. Нове Давидково
            </h1>
          </div>
          <div
            onClick={() => {
              navigate("/contact", { replace: true });
            }}
            className={classes["button-wrapper"]}
          >
            <button>Записатися на молитву</button>
          </div>
        </div>
      </section>

      {/* Location */}

      <section className={classes["location-wrapper"]}>
        <div className={classes["location-text"]}>
          <h1>
            Наша локація <GrMapLocation />
          </h1>
        </div>

        <div className={classes["location-image"]}>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.google.com.ua/maps/place/%D0%B2%D1%83%D0%BB%D0%B8%D1%86%D1%8F+%D0%9D%D0%B0%D0%B1%D0%B5%D1%80%D0%B5%D0%B6%D0%BD%D0%B0,+99,+%D0%9D%D0%BE%D0%B2%D0%B5+%D0%94%D0%B0%D0%B2%D0%B8%D0%B4%D0%BA%D0%BE%D0%B2%D0%BE,+%D0%97%D0%B0%D0%BA%D0%B0%D1%80%D0%BF%D0%B0%D1%82%D1%81%D1%8C%D0%BA%D0%B0+%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C,+89624/@48.4453049,22.6222205,17z/data=!3m1!4b1!4m5!3m4!1s0x4739aa9292358b71:0x392ac0950d3e589!8m2!3d48.4453014!4d22.6244092?hl=ru"
          >
            <img src={Location} alt="location" />
          </a>
        </div>
      </section>

      {/* Review Schedule */}

      <section className={classes["main-wrapper"]}>
        <img src={Inside} alt="christ" />

        <div className={classes.container}>
          <div className={classes.name}>
            <h1>
              В нашому храмі регулярно проходять богослужіння. Ознайомитися з
              детальним розкладом можна в розділі "Новини"
            </h1>
          </div>
          <div
            onClick={() => {
              navigate("/news", { replace: true });
            }}
            className={classes["button-wrapper"]}
          >
            <button>Ознайомитися з розкладом богослужінь</button>
          </div>
        </div>
      </section>

      {/* Photo Gallery */}

      <section className={classes["photos-wrapper"]}>
        <div className={classes["photos-text"]}>
          <h1>Фото з життя громади</h1>
        </div>

        <Carousel
          infiniteLoop={true}
          autoPlay={true}
          swipeable={true}
          className={classes.photos}
        >
          <img src={Photo1} alt="carousel" />
          <img src={Photo2} alt="carousel" />
          <img src={Photo3} alt="carousel" />
          <img src={Photo4} alt="carousel" />
          <img src={Photo5} alt="carousel" />
          <img src={Photo6} alt="carousel" />
          <img src={Photo8} alt="carousel" />
          <img src={Photo9} alt="carousel" />
          <img src={Photo10} alt="carousel" />
        </Carousel>
      </section>
    </Fragment>
  );
};

export default Home;
