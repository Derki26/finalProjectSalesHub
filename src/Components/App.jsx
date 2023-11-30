import React from "react";
import { Route, Routes  } from "react-router-dom";
import "./App.css";
import {Home} from "./Home";
import {About} from "./About";
import {Courses} from "./Courses";
import {Contact} from "./Contact";
import {Footer} from "./Footer";

const App = () => {
  return (
    <>
      
      <Home />
      <Routes>
        <Route  path=' ' component={<Home />} />
        <Route  path='home' component={<About />} />
        <Route  path='about' component={<Courses />} />
        <Route  path='service' component={<Contact />} />
        <Route  path='footer' component={<Footer />} />
      </Routes>
    </>
  );
}

export { App };

