import { useEffect, useState } from "react";
import { CardSkill } from "../CardSkill";
import style from "./style.module.css";

import front from "../../assets/cards/front.png";
import back from "../../assets/cards/back.png";
import full from "../../assets/cards/full.png";

export function CardsSkills() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (count + 1 === 3) {
        setCount(() => 0);
      } else {
        setCount((pre) => pre + 1);
      }
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [count]);

  return (
    <div id="habilities" className={style.containerCarsSkill}>
      <CardSkill
        isActive={count === 0}
        title="Front-end"
        text="Dynamic UIs with React and TypeScript"
        url={front}
      ></CardSkill>
      <CardSkill
        isActive={count === 1}
        title="Back-end"
        text="Node.js, Express, PostgreSQL expertise."
        url={back}
      ></CardSkill>
      <CardSkill
        isActive={count === 2}
        title="Full-stack"
        text="Full-stack, React, Node.js, TypeScript, PostgreSQL."
        url={full}
      ></CardSkill>
    </div>
  );
}
