import React from "react";
import { Route, Routes  } from "react-router-dom";
import "./App.css";
import {Home} from "./Home";
import {About} from "./About";
import {Courses} from "./Courses";
import {Contact} from "./Contact";
import {Certificate} from "./Certificate";
import {Footer} from "./Footer";
import {Hero} from "./Hero";


const App = () => {
  return (
    <>
     
     <Home />
      <Routes>
        <Route  path='courses' element={<Courses />} />
        <Route  path='Certificate' element={<Certificate />} />
        <Route  path='About' element={<About />} />
        <Route  path='Contact' element={<Contact />} />
        <Route  path='footer' element={<Footer />} />
      </Routes>
     
     
    </>
  );
}


export { App };

