import style from "./style.module.css";

import back from "../../assets/itemsDescriptions/back.svg";
import dev from "../../assets/itemsDescriptions/dev.svg";
import page from "../../assets/itemsDescriptions/page.svg";

const cards = [
  {
    titulo: "Excelente Maquetado ",
    descripcion:
      "Enfoque en maquetado de diseños UI, donde transformo tu diseño en una Interfaz Web",
    src: page,
  },
  {
    titulo: "Orientado en eCommerce",
    descripcion:
      "Experiencia creando eCommerce tanto en el Front End y Back End.",
    src: dev,
  },
  {
    titulo: "Habilidades Técnicas Destacadas",
    descripcion:
      "Tengo buenas técnicas en resolución de problemas de forma algorítmica y matemática",
    src: back,
  },
];

function WhatIDo() {
  return (
    <div className={style.container}>
      <h4 className={style.subTitle}>WhatIDo</h4>
      <h2 className={style.mainTitle}> Specializing In</h2>
      <div className={style.containerCards}>
        {cards.map((card, index) => {
          return (
            <div className={style.containerCard} key={index}>
              <picture className={style.picture}>
                <img src={card.src} className={style.img} alt="" />
              </picture>
              <h3 className={style.subTitle}>{card.titulo}</h3>
              <p className={style.text}>{card.descripcion}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default WhatIDo;
