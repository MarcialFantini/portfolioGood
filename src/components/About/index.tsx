import React from "react";

import style from "./style.module.css";

function About() {
  return (
    <div className={style.containerAbout}>
      <h4 className={style.title}>About Me</h4>

      <div className={style.containerGrid}>
        <div className={style.containerText}>
          <h4 className={style.title}>Full Stack</h4>
          <p className={style.text}>
            Soy un apasionado desarrollador Full Stack con una sólida
            experiencia en la creación de soluciones web innovadoras. Mi enfoque
            se centra en la combinación de tecnologías de vanguardia para
            proporcionar experiencias de usuario excepcionales. Soy autodidacta
            y siempre estoy buscando aprender y mejorar mis habilidades.
          </p>
          <button className={style.button}>Download My CV</button>
        </div>
        <div className={style.containerImage}>
          <div className={style.shadowOvalRevers1}></div>
          <div className={style.shadowOval1}></div>
          <div className={style.shadowOvalRevers}></div>
          <div className={style.shadowOval}></div>
          <picture className={style.picture}>
            <img src="" alt="" />
          </picture>
        </div>
      </div>
    </div>
  );
}

export default About;
