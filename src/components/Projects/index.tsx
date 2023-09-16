import style from "./style.module.css";
import Card from "./card";
import ecommerce from "../../assets/projects/a.png";

const apps = [
  {
    appTitle: "Proyecto Frontend de Comercio Electrónico",
    appName: "EcomStore",
    src: ecommerce, // Reemplaza con el enlace a tu repositorio si lo deseas
    appDescription:
      "Un avanzado proyecto frontend de comercio electrónico construido con React.js, Next.js y Redux.js.  disfruta de una experiencia de usuario.",
  },

  {
    appTitle: "Proyecto Backend con TypeScript y Express",
    appName: "EcomStore Backend",
    src: ecommerce, // Reemplaza con el enlace a tu repositorio si lo deseas
    appDescription:
      " Proyecto EcomStore Backend, un proyecto backend potente y seguro construido con TypeScript y Express. Utiliza PostgreSQL como tu base de datos para gestionar datos críticos.",
  },
];

function Projects() {
  return (
    <div id="projects" className={style.containerProjects}>
      {apps.map((app, index) => {
        return (
          <Card
            src={app.src}
            appDescription={app.appDescription}
            appName={app.appName}
            appTitle={app.appTitle}
            index={index % 2 === 0}
          ></Card>
        );
      })}
    </div>
  );
}

export default Projects;
