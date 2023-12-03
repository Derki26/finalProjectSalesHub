import React from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import "./App.css";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export { App };
