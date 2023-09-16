import React, { useState } from "react";
import style from "./style.module.css";

export function Navbar() {
  const [active, setActive] = useState(false);

  const handlerToggleActive = () => setActive((prev) => !prev);

  const handleItemClick = (id: string) => {
    setActive(false); // Cierra el menú desplegable al hacer clic en un elemento
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className={style.nav}>
      <h2 className={style.title}>Marcial</h2>
      <button onClick={handlerToggleActive} className={style.button}>
        |||
      </button>

      <ul className={style.list + " " + (active ? style.active : "")}>
        <li onClick={() => handleItemClick("habilities")}>Habilidades</li>
        <li onClick={() => handleItemClick("about")}>Sobre mi</li>

        <li onClick={() => handleItemClick("contact")}>Contacto</li>
        <li onClick={() => handleItemClick("projects")}>Proyectos</li>
      </ul>
    </nav>
  );
}
