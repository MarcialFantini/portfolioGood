import style from "./style.module.css";

import back from "../../assets/itemsDescriptions/back.svg";
import dev from "../../assets/itemsDescriptions/dev.svg";
import page from "../../assets/itemsDescriptions/page.svg";

const cards = [
  {
    titulo: "Desarrollador Full Stack Apasionado",
    descripcion:
      "Experto en la creación de soluciones web innovadoras y optimizadas, con experiencia en tecnologías de vanguardia y un enfoque centrado en la experiencia del usuario.",
    src: page,
  },
  {
    titulo: "Experto en eCommerce",
    descripcion:
      "Especializado en el desarrollo completo de sistemas de comercio electrónico, desde la creación de robustos backends con Express.js hasta la implementación de interfaces de usuario dinámicas.",
    src: dev,
  },
  {
    titulo: "Habilidades Técnicas Destacadas",
    descripcion:
      "Experto en JavaScript, con un enfoque en TypeScript, y amplia experiencia en frameworks como Next.js y Express.js. Especializado en la gestión de estado con Redux y en el diseño de bases de datos.",
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
