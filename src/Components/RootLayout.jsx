import { Outlet, Link } from "react-router-dom";
import "../CSS/header.css";
import { Footer } from './Footer';


const RootLayout = () => {
  return (
    <div className="container-fluid mx-auto flex items-center justify-between">
      <div>
        <nav>
          <div className="header-nav2">
            <img src="logo-salesforce.svg" alt="logo" className="logo-nav" style={{ marginRight: "10px"}} />
            <Link to="/" className="text-black text-base mr-5"  style={{ fontSize: "2rem" }}>
              Home
            </Link>
            <Link to="/about" className="text-black ml-4 text-base mr-5" style={{ fontSize: "2rem" }} >
              About
            </Link>
            <Link to="/showcase" className="text-black ml-4 text-base mr-2" style={{ fontSize: "2rem" }}>
              Showcase
            </Link>

            <Link to="/contact" className="text-black ml-4 text-base flex items-center  mr-5" style={{ fontSize: "2rem" }}>
                 Contact Us
            </Link>

            <Link to="/users" className="text-black ml-4 text-base mr-5" style={{ fontSize: "2rem" }}>
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
      
      <div className="header-nav1" style={{backgroundImage: 'url(/test-bg.webp)'}}>
       <div className="hero-overlay bg-opacity-60"></div>
         <div className="hero-content text-center text-neutral-content">
           <div className="max-w-md">
               <h1 className="mb-5 text-5xl font-bold" style={{ fontFamily: "Avant Garde", color: "rgb(3, 45, 96)", fontSize: "48px", fontWeight: 600, height: "109.438px" }} >Blaze your trail with us at Salesforce.</h1>
               <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                <button className="btn btn-primary">Get Started</button>
             </div>
          </div>
          </div>
       </div>
          
  );
};

export { RootLayout };
