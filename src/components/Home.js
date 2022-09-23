import React from "react";

import Church from "../assets/church-bg.jpg";

import classes from "./Home.module.css";

import Location from "../assets/location.jpg";

import { GrMapLocation } from "react-icons/gr";

import Slider from "react-slick";

import "slick-carousel/slick/slick.css";

import "slick-carousel/slick/slick-theme.css";

import Photo1 from "../assets/slider-photos/1.jpg";
import Photo2 from "../assets/slider-photos/2.jpg";
import Photo3 from "../assets/slider-photos/3.jpg";
import Photo4 from "../assets/slider-photos/4.jpg";
import Photo5 from "../assets/slider-photos/5.jpg";
import Photo6 from "../assets/slider-photos/6.jpg";
import Photo7 from "../assets/slider-photos/7.jpg";
import Photo8 from "../assets/slider-photos/8.jpg";
import Photo9 from "../assets/slider-photos/9.jpg";
import Photo10 from "../assets/slider-photos/10.jpg";

const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
  };

  const photos = () => [
    {
      id: 1,
      src: Photo1,
      alt: "carousel",
    },
    {
      id: 2,
      src: Photo2,
      alt: "carousel",
    },
    {
      id: 3,
      src: Photo3,
      alt: "carousel",
    },
    {
      id: 4,
      src: Photo4,
      alt: "carousel",
    },
    {
      id: 5,
      src: Photo5,
      alt: "carousel",
    },
    {
      id: 6,
      src: Photo6,
      alt: "carousel",
    },
    {
      id: 7,
      src: Photo7,
      alt: "carousel",
    },
    {
      id: 8,
      src: Photo8,
      alt: "carousel",
    },
    {
      id: 9,
      src: Photo9,
      alt: "carousel",
    },
    {
      id: 10,
      src: Photo10,
      alt: "carousel",
    },
  ];

  return (
    <>
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
          <div className={classes["button-wrapper"]}>
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

      {/* Photo Gallery */}

      <section className={classes["photos-wrapper"]}>
        <div className={classes["photos-text"]}>
          <h1>Фото з життя громади</h1>
        </div>

        <Slider {...settings} className={classes["carousel-wrapper"]}>
          {/* {photos.map(({ id, src, alt }) => (
            <div key={id}>
              <img src={src} alt={alt} />
            </div>
          ))} */}
          <div>
            <div>
              <h3>1</h3>
            </div>
            <div>
              <h3>2</h3>
            </div>
            <div>
              <h3>3</h3>
            </div>
            <div>
              <h3>4</h3>
            </div>
            <div>
              <h3>5</h3>
            </div>
            <div>
              <h3>6</h3>
            </div>
          </div>
        </Slider>
      </section>

      {/* Review Schedule */}
    </>
  );
};

export default Home;
