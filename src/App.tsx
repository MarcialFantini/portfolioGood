import About from "./components/About";
import { CardsSkills } from "./components/CardsSkills";
import { Header } from "./components/Header";
import { Navbar } from "./components/Navbar";
import Projects from "./components/Projects";
import WhatIDo from "./components/WhatIDo";

import style from "./App.module.css";

function App() {
  return (
    <div className={style.containerApp}>
      <Navbar></Navbar>
      <Header></Header>
      <CardsSkills></CardsSkills>
      <About></About>
      <WhatIDo></WhatIDo>
      <Projects></Projects>
    </div>
  );
}

export default App;
