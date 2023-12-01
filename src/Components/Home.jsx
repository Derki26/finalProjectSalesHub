import { Outlet, Link } from "react-router-dom";
import "../CSS/header.css";
import { Footer } from "../Components/Footer";
import { Hero } from "../Components/Hero";
import { Certificate } from "../Components/Certificate";
import { Courses } from "../Components/Courses";


const Home = () => {
  return (
    
    <div className="container-fluid mx-auto flex items-center justify-between">
      <div>
        <nav>
          <div className="header-nav2">
            <img
              src="logo-salesforce.svg"
              alt="logo"
              className="logo-nav"
              style={{ marginRight: "10px" }}
            />
            <Link
              to="/"
              className="text-black text-base mr-2"
              style={{ fontSize: "1.5rem" }}
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-black ml-4 text-base mr-2"
              style={{ fontSize: "1.5rem" }}
            >
              About
            </Link>
            <Link
              to="/courses"
              className="text-black ml-4 text-base mr-2"
              style={{ fontSize: "1.5rem" }}
            >
              Courses
            </Link>

            <Link
              to="/certificate"
              className="text-black ml-4 text-base flex items-center  mr-2"
              style={{ fontSize: "1.5rem" }}
            >
              Certificate
            </Link>

            <Link
              to="/users"
              className="text-black ml-4 text-base mr-2"
              style={{ fontSize: "1.5rem" }}
            >
              Users
            </Link>
          </div>
        </nav>
      </div>
      <div
        className="container-fluid grid"
        style={{ boxShadow: "0 5px 8px rgba(0, 0, 0, 0.1)", padding: "1rem" }}
      >    
        <Outlet />
      </div>
      <div className="container-fluid mx-auto flex items-center justify-between">
     
      </div>
    </div>
  );
};

export { Home };
