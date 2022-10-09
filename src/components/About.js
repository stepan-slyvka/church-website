import React, { useEffect } from "react";

import classes from "./About.module.css";

import { GrMapLocation } from "react-icons/gr";
import { BiCalendar } from "react-icons/bi";

import Silvaj from "../assets/cropped-images/about/silvaj.jpg";
import Church from "../assets/cropped-images/about/church.jpg";
import Pastor from "../assets/cropped-images/about/otec-pavlo.jpg";
import Church1 from "../assets/cropped-images/about/church-outside-2.jpg";
import Church2 from "../assets/cropped-images/about/church-inside-1.jpg";

import ReactGA from "react-ga";

const About = () => {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname);
  }, []);

  return (
    <div className={classes["main-wrapper"]}>
      <h1>Парафія св. Архистратига Михаїла с. Нове Давидково</h1>

      {/* Left section/History */}

      <div className={classes["content-wrapper"]}>
        <section className={classes.container}>
          <div className={classes.wrapper}>
            <div>
              <p>
                Нове Давидково – мальовниче село в Мукачівському районі, з
                цікавою історією. У 1699 р. в селі проживало лише 9 осіб. У 1733
                р. згадують дерев’яну церкву св. Михаїла. Цю церкву, судячи з
                метричних записів, збудували з дуба в другій половині XVI ст.
                Стараннями священика Михайла Орлая спорудження нової кам’яної
                церкви почали 23 червня 1795 р. і закінчили в 1799 р. Посвятив
                церкву 7 червня 1799 р. віце-архідеканом Мукачівського округу
                о.Андрій Кутко. У 1800 р. головний фасад зміцнили підпорами.
              </p>
            </div>

            <div className={classes["history-section-reverse"]}>
              <img src={Silvaj} alt="Silvaj" />
              <p>
                З 1899 по 1904 рік у селі служив письменник – просвітитель
                о.Іван Сільвай, який був похований біля церкви, а в метричній
                книзі з нагоди 100-річчя старої церкви залишив записи стосовно
                історії церкви та села, датовані 7 — 19 червня 1899 р. 12 червня
                1911 р. зібралася рада з будівництва нової мурованої церкви.
                Дозволили розібрати стару церкву, щоб звільнити ділянку.
              </p>
            </div>

            <div className={classes["history-section"]}>
              <img src={Church} alt="Church" className={classes.margin} />
              <p>
                Ініціатором спорудження був місцевий парох Йосип Папп. Усе
                доросле населення села (в селі тоді було 350 хат та 1800
                жителів) зібралося 7 травня 1911 р. і під головуванням
                віце-архідекана Михайла Бачинського вирішило спорудити нову
                церкву. Почали будівництво 15 березня 1913 р. Фундамент
                посвятили на третій день Великодня — 29 квітня, а хрест на вежі
                встановили 12 жовтня того ж року. Розказують, що очолював
                спорудження і, можливо, виготовив проект талановитий архітектор
                з Підгорода Михайло Білак. Іконостас поставили 26 грудня 1917 р.
              </p>
            </div>

            <div className={classes.history}>
              <img
                src={Church1}
                alt="church outside"
                className={classes.image}
              />
              <p>
                Образи до іконостаса і вівтаря намалював відомий художник Юлій
                Віраґ. Посвятив храм єпископ Антон Папп в 1923 р. Дзвіницю,
                каплицю і хрест посвятив єпископ Петро Ґебей 2 серпня 1926 р.
                1935 р. завершено розпис інтер’єру. З приходом радянської влади
                храм було незаконно передано православній церкви Московського
                патріархату, котрі відправляють богослужіння до цього часу. За
                часу незалежності члени греко-католицької громади неодноразово
                зверталися до суду, щодо повернення храму законним власникам.
                Суд виніс рішення про почергове служіння громад у храмі, проте
                за активного спротиву православної громади та місцевої влади, це
                рішення не було приведене у виконання.
              </p>
            </div>

            <div className={classes.history}>
              <img
                src={Church2}
                alt="church inside"
                className={classes.image}
              />
              <p>
                Вже близько 10 років греко-католицька громада села змушена
                відправляти богослужіння в приміщенні колишньої шкільної
                їдальні, котра за свій кошт була перебудована під каплицю. На
                цей час громада налічує близько 200 вірників.
              </p>
            </div>
          </div>
        </section>

        {/* Right Section/Info */}

        <section className={classes.aside}>
          <div>
            <h3>
              <GrMapLocation /> с. Нове Давидково, вул. Набережна, 99
            </h3>
          </div>

          <div>
            <h3>
              <BiCalendar /> Неділі та свята
            </h3>
            <p>Утреня - 8:00 к.ч.</p>
            <p>Служба Божа - 9:30 к.ч.</p>
            <h3>Будні</h3>
            <p>Служби Божі за потребою.</p>
            <h3>Субота</h3>
            <p>Підготовка дітей до першого причастя - 15:00 к.ч.</p>
            <p>Зустріч молоді - 16:00 к.ч.</p>
          </div>

          <div className={classes.pastor}>
            <h3>Парох:</h3>
            <img src={Pastor} alt="Pastor" />
            <p>о.Павло Сосницький</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
