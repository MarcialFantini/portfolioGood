import style from "./style.module.css";
import Card from "./card";
import ecommerce from "../../assets/projects/a.png";

const apps = [
  {
    appTitle: "Weather App",
    appName: "Weatherly",
    src: ecommerce,
    appDescription:
      "Get real-time weather forecasts and updates with Weatherly. Stay informed about current weather conditions, temperature, and more, wherever you are.",
  },
  {
    appTitle: "Task Manager",
    appName: "TaskMaster",
    src: ecommerce,
    appDescription:
      "Effortlessly manage your tasks and to-do lists with TaskMaster. Stay organized, set deadlines, and boost your productivity with this powerful task management app.",
  },
];

function Projects() {
  return (
    <div className={style.containerProjects}>
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
