import React from "react";
import style from "./style.module.css";

export function Navbar() {
  return (
    <nav className={style.nav}>
      <h2 className={style.title}>Marcial</h2>
      <ul className={style.list}>
        <li>Habilities</li>
        <li>Projects</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
}
