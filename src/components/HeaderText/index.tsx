import React from "react";

import styled from "./style.module.css";

export function HeaderText() {
  return (
    <div className={styled.textContainer}>
      <p className={styled.text}>Hola, soy Marcial</p>
      <h1 className={styled.title}>Programador Web</h1>
      <h3 className={styled.subText}>Desarrollador Full Stack</h3>
      <button className={styled.button}>Acerca de mí</button>
    </div>
  );
}
