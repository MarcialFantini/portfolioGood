import React from "react";

import styled from "./style.module.css";

export function HeaderText() {
  return (
    <div className={styled.textContainer}>
      <p className={styled.text}>Hello Im Marcial</p>
      <h1 className={styled.title}>Web Programer! </h1>
      <h3 className={styled.subText}>Full stack dev</h3>
      <button className={styled.button}>About Me</button>
    </div>
  );
}
