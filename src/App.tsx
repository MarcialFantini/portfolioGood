import About from "./components/About";
import { CardsSkills } from "./components/CardsSkills";
import { Header } from "./components/Header";
import { Navbar } from "./components/Navbar";
import Projects from "./components/Projects";
import WhatIDo from "./components/WhatIDo";

import style from "./App.module.css";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <div className={style.containerApp}>
        <Header></Header>
        <CardsSkills></CardsSkills>
        <About></About>
        <WhatIDo></WhatIDo>
        <Projects></Projects>
        <Contact></Contact>
      </div>
    </>
  );
}

export default App;
