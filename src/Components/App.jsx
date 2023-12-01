import React from "react";
import { Route, Routes  } from "react-router-dom";
import "./App.css";
import {Navbar} from "./Navbar";
import {About} from "./About";
import {Home} from "./Home";
import {Courses} from "./Courses";
import {Contact} from "./Contact";
import {Certificate} from "./Certificate";
import {Footer} from "./Footer";




const App = () => {
  return (
    <>
     <Navbar />     
      <Routes>
        <Route  path='/' element={<Home />} />
        <Route  path='Courses' element={<Courses />} />
        <Route  path='Certificate' element={<Certificate />} />
        <Route  path='About' element={<About />} />
        <Route  path='Contact' element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}


export { App };

