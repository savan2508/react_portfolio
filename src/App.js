import React from "react";
import { NavBarHeader } from "./component/navbarheader/NavBarHeader";
import { Hero } from "./component/Hero";
import "aos/dist/aos.css";
import AOS from "aos";

AOS.init();

function App() {
  return (
    <>
      <NavBarHeader />
      {/*<Hero />*/}
    </>
  );
}

export default App;
