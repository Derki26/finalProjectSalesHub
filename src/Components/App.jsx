import React from "react";
import { Route, Routes  } from "react-router-dom";
import "./App.css";
import {Home} from "./Home";
import {About} from "./About";
import {Courses} from "./Courses";
import {Contact} from "./Contact";
import {Certificate} from "./Certificate";
import {Footer} from "./Footer";

const App = () => {
  return (
    <>
      
      <Home />
      <Routes>
        <Route  path=' ' component={<Home />} />
        <Route  path='home' component={<About />} />
        <Route  path='courses' component={<Courses />} />
        <Route  path='Certificate' component={<Certificate />} />
        <Route  path='Contact' component={<Contact />} />
        <Route  path='footer' component={<Footer />} />
      </Routes>
    </>
  );
}

export { App };

