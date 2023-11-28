import { Outlet, Link } from "react-router-dom";
import logos from "/salesForceHubSmall.svg";
import "../CSS/header.css";

const RootLayout = () => {
  return (
    <div className="container-fluid mx-auto flex items-center justify-between">
      <div>
        <nav>
          <div className="ml-2 items-center ">
            <img src={logos} alt="logo" className="logo-nav" style={{ marginRight: "100px" }} />
            <Link to="/" className="text-black text-base mr-5" >
              Home
            </Link>
            <Link to="/about" className="text-black ml-4 text-base mr-5" >
              About
            </Link>
            <Link to="/showcase" className="text-black ml-4 text-base mr-2" >
              Showcase
            </Link>

            <Link to="/contact" className="text-black ml-4 text-base flex items-center  mr-5">
                 Contact Us
            </Link>

            <Link to="/users" className="text-black ml-4 text-base mr-5" >
              Users
            </Link>
          </div>
        </nav>
      </div>

      <div
        className="container-fluid grid"
        style={{ boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)", padding: "3rem" }}
      >
        <Outlet />
      </div>
    </div>
  );
};

export { RootLayout };
