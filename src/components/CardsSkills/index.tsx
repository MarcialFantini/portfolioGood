import React from "react";
import { CardSkill } from "../CardSkill";
import style from "./style.module.css";

import front from "../../assets/cards/front.png";
import back from "../../assets/cards/back.png";
import full from "../../assets/cards/full.png";

export function CardsSkills() {
  return (
    <div className={style.containerCarsSkill}>
      <div className={style.bar}></div>
      <CardSkill
        title="Front-end"
        text="Dynamic UIs with React and TypeScript"
        url={front}
      ></CardSkill>
      <CardSkill
        title="Back-end"
        text="Node.js, Express, PostgreSQL expertise."
        url={back}
      ></CardSkill>
      <CardSkill
        title="Full-stack"
        text="Full-stack, React, Node.js, TypeScript, PostgreSQL."
        url={full}
      ></CardSkill>
    </div>
  );
}
