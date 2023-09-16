import person from "../../assets/persona/persona.png";

import style from "./style.module.css";

function About() {
  return (
    <div id="about" className={style.containerAbout}>
      <h4 className={style.title}>About Me</h4>

      <div className={style.containerGrid}>
        <div className={style.containerText}>
          <h4 className={style.title}>Full Stack</h4>
          <p className={style.text}>
            Amo solucionar problemas con las herramientas de programación. Puedo
            aportar un gran valor a la empresa mediante la maquetación,
            animación y adición de funcionalidades para el usuario final. Soy
            autodidacta y siempre estoy deseoso de aplicar todos mis
            conocimientos.
          </p>
          <button className={style.button}>Download My CV</button>
        </div>
        <div className={style.containerImage}>
          <div className={style.shadowOvalRevers1}></div>
          <div className={style.shadowOval1}></div>
          <div className={style.shadowOvalRevers}></div>
          <div className={style.shadowOval}></div>
          <picture className={style.picture}>
            <img className={style.img} src={person} alt="" />
          </picture>
        </div>
      </div>
    </div>
  );
}

export default About;
