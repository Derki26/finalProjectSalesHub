import "./App.css";
import { Outlet } from "react-router-dom";
import { Footer } from "./Footer";
import { Navbar } from "./ui/Navbar";

const PrivateApp = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export { PrivateApp };
