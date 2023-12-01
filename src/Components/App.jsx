import React from "react";
import { Route, Routes , BrowserRouter as Router } from "react-router-dom";
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
      <Hero />
      <Courses />
      <About />
      <Footer />
      <Routes>
        <Route  path=' ' component={<Home />} />
        <Route  path='about' component={<About />} />
        <Route  path='courses' component={<Courses />} />
        <Route  path='Certificate' component={<Certificate />} />
        <Route  path='Contact' component={<Contact />} />
        <Route  path='footer' component={<Footer />} />
      </Routes>
    </>
  );
}


export { App };

