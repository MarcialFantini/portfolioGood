import React from "react";
import style from "./style.module.css";
import Card from "./card";

const apps = [
  {
    appTitle: "Weather App",
    appName: "Weatherly",
    appDescription:
      "Get real-time weather forecasts and updates with Weatherly. Stay informed about current weather conditions, temperature, and more, wherever you are.",
  },
  {
    appTitle: "Task Manager",
    appName: "TaskMaster",
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
