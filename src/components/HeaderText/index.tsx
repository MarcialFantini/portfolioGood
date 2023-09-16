import styled from "./style.module.css";

export function HeaderText() {
  const handleItemClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className={styled.textContainer}>
      <p className={styled.text}>Hola, soy Marcial</p>
      <h1 className={styled.title}>Programador Full Stack</h1>
      <button
        onClick={() => handleItemClick("about")}
        className={styled.button}
      >
        Acerca de mí
      </button>
    </div>
  );
}
