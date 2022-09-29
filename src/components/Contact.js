import React from "react";

import classes from "./Contact.module.css";

import Pastor from "../assets/otec-pavlo.jpg";

import { useFormik } from "formik";

import { BsFacebook } from "react-icons/bs";
import { FaViber } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { CgMail } from "react-icons/cg";
import { AiOutlinePhone } from "react-icons/ai";

const Contact = () => {
  //  Form validation here

  const validate = (values) => {
    const errors = {};
    if (!values.name) {
      errors.name = "Поле не може бути пустим";
    } else if (values.name.length <= 3) {
      errors.name = "Ім'я має бути 4 чи більше символів";
    }

    if (!values.email) {
      errors.email = "Поле не може бути пустим";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = "Неправильний емейл";
    }

    if (!values.message) {
      errors.message = "Поле не може бути пустим";
    } else if (values.message.length <= 9) {
      errors.message = "Текст має бути 10 чи більше символів";
    }

    return errors;
  };

  // Formik

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    validate,
  });

  return (
    <section className={classes["main-wrapper"]}>
      <div className={classes.container}>
        {/* Info about Pastor */}

        <div className={classes["left-info"]}>
          <img src={Pastor} alt="Pastor" />
          <h1>о. Павло Сосницький</h1>
        </div>

        <div className={classes["right-info"]}>
          <h1>Контактна інформація</h1>

          <h3>Номер телефону :</h3>

          <p>
            <AiOutlinePhone /> +380960924229 - Viber <FaViber />, WhatsApp{" "}
            <FaWhatsapp />, Telegram <FaTelegram />{" "}
          </p>

          <h3>Електронна пошта :</h3>

          <p>
            <CgMail /> mgce.web@gmail.com
          </p>

          <h3>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.facebook.com/novedavydkovo"
            >
              <BsFacebook /> сторінка нашого храму
            </a>
          </h3>
          <h3>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.facebook.com/people/%D0%9F%D0%B0%D0%B2%D0%BB%D0%BE-%D0%A1%D0%BE%D1%81%D0%BD%D0%B8%D1%86%D1%8C%D0%BA%D0%B8%D0%B9/100012645270986/"
            >
              <BsFacebook /> сторінка отця Павла
            </a>
          </h3>

          {/* Form */}

          <h3>Також можна зв'язатися через дану форму</h3>
          <form
            className={classes.form}
            action="https://getform.io/f/b7f759ad-f4b8-464d-81db-a0b6b8a7c5e7"
            method="POST"
          >
            <input
              type="text"
              name="name"
              id="text"
              placeholder="Введіть ваше ім'я..."
              onChange={formik.handleChange}
              value={formik.values.name}
              onBlur={formik.handleBlur}
            ></input>
            {formik.touched.name && formik.errors.name ? (
              <div className={classes.warning}>{formik.errors.name}</div>
            ) : null}

            <input
              type="email"
              name="email"
              id="email"
              placeholder="Введіть ваш емейл..."
              onChange={formik.handleChange}
              value={formik.values.email}
              onBlur={formik.handleBlur}
            ></input>
            {formik.touched.email && formik.errors.email ? (
              <div className={classes.warning}>{formik.errors.email}</div>
            ) : null}

            <textarea
              type="text"
              name="message"
              id="message"
              placeholder="Введіть ваше повідомлення..."
              onChange={formik.handleChange}
              value={formik.values.message}
              onBlur={formik.handleBlur}
            ></textarea>
            {formik.touched.message && formik.errors.message ? (
              <div className={classes.warning}>{formik.errors.message}</div>
            ) : null}

            {/* Button */}

            <div className={classes.align}>
              <button
                type="submit"
                className={
                  formik.isValid
                    ? classes["submit-btn"]
                    : classes["submitBtn-disabled"]
                }
                disabled={!formik.isValid}
              >
                Надіслати
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
