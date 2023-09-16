import { useState } from "react";
import style from "./style.module.css";

export function Navbar() {
  const [active, setActive] = useState(false);

  const handleItemClick = (id: string) => {
    setActive(false); // Cierra el menú desplegable al hacer clic en un elemento

    const element = document.getElementById(id);
    if (element) {
      const elementRect = element.getBoundingClientRect();
      const absoluteElementTop = elementRect.top + window.pageYOffset;
      const middleOfElement = absoluteElementTop - window.innerHeight / 3;

      window.scrollTo({
        top: middleOfElement,
        behavior: "smooth",
      });
    }
  };

  return (
    <nav className={style.nav}>
      <h2 className={style.title}>Marcial</h2>

      <ul className={style.list + " " + (active ? style.active : "")}>
        <li onClick={() => handleItemClick("habilities")}>Habilidades</li>
        <li onClick={() => handleItemClick("about")}>Sobre mi</li>
        <li onClick={() => handleItemClick("projects")}>Proyectos</li>

        <li onClick={() => handleItemClick("contact")}>Contacto</li>
      </ul>
    </nav>
  );
}
