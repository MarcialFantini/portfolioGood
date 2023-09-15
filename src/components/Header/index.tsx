import React from "react";
import { HeaderText } from "../HeaderText";

import businessman from "../../assets/persona/persona.png";

import style from "./style.module.css";

export function Header() {
  return (
    <header className={style.header}>
      <figure className={style.containerImage}>
        <div className={style.circle}></div>
        <div className={style.subCircle}></div>

        <div className={style.containerImageModal}>
          <picture className={style.picture}>
            <img className={style.img} src={businessman} alt="" />
          </picture>
        </div>
      </figure>

      <HeaderText></HeaderText>
    </header>
  );
}
