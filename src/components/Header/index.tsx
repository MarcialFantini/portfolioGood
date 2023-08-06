import React from "react";
import { HeaderText } from "../HeaderText";

import businessman from "../../assets/header/businessman.png";

import style from "./style.module.css";

export function Header() {
  return (
    <header className={style.header}>
      <picture className={style.picture}>
        <img className={style.img} src={businessman} alt="" />
      </picture>
      <HeaderText></HeaderText>
    </header>
  );
}
